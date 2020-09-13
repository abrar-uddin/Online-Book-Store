from django.db import models
from django.core import validators


# Create your models here.

class Book(models.Model):
    image = models.CharField(max_length=100)
    name = models.CharField(max_length=500)
    author = models.CharField(max_length=100)
    book_format = models.CharField(max_length=20)
    stars = models.FloatField(validators=[validators.MinValueValidator(0), validators.MaxValueValidator(5)])
    price = models.DecimalField(max_digits=5, decimal_places=2,
                                validators=[validators.MinValueValidator(0), validators.MaxValueValidator(500)])
    currency = models.CharField(max_length=1)
    old_price = models.DecimalField(max_digits=5, decimal_places=2,
                                    validators=[validators.MinValueValidator(0), validators.MaxValueValidator(500)])
    isbn = models.CharField(max_length=13)
    category = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)

    def __str__(self):
        return self.name


class Item(models.Model):
    quantity = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(99)])
    book = models.ForeignKey('Book', related_name='book_item', on_delete=models.CASCADE)

    def __str__(self):
        return "{} {}".format(self.quantity, self.book.name)

    def get_price(self):
        return self.quantity * self.book.price


class ShoppingCart(models.Model):
    order_date = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    items = models.ManyToManyField(Item, blank=True)
    user = models.ForeignKey('auth.User', related_name='shopping_cart', on_delete=models.CASCADE)

    def add_item(self, item):
        self.items.add(item)

    def get_cart_items(self):
        return self.items.all()

    def get_total(self):
        return sum([items.get_price() for items in self.get_cart_items()])

    def __str__(self):
        return "{} has {} in their cart. Their total is ${}".format(self.user, self.get_cart_items(),
                                                                    self.get_total())
