from django.db import models
from django.core import validators
from django.utils.datetime_safe import datetime


# Create your models here.

class Book(models.Model):
    image = models.CharField(max_length=100)
    name = models.CharField(max_length=500)
    author = models.CharField(max_length=100)
    book_format = models.CharField(max_length=20)
    stars = models.FloatField(validators=[validators.MinValueValidator(0), validators.MaxValueValidator(5)])
    price = models.FloatField(validators=[validators.MinValueValidator(0), validators.MaxValueValidator(500)])
    currency = models.CharField(max_length=1)
    old_price = models.FloatField(validators=[validators.MinValueValidator(0), validators.MaxValueValidator(500)])
    isbn = models.CharField(max_length=13)
    category = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)

    def __str__(self):
        return self.name


class ShoppingCart(models.Model):
    order_date = models.DateTimeField(auto_now_add=True)
    count = models.PositiveIntegerField(default=0)
    total = models.FloatField(default=0)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey('auth.User', related_name='shopping_cart', on_delete=models.CASCADE)

    def __str__(self):
        return "User: {} has {} items in their cart. Their total is ${}".format(self.user, self.count, self.total)


class Item(models.Model):
    quantity = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(99)])
    book = models.ForeignKey('Book', related_name='book_item', on_delete=models.CASCADE)
    cart = models.ForeignKey(ShoppingCart, related_name='shopping_cart_item', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return "This order item contains {} copy of {}. Total {}.".format(self.quantity, self.book.name,

                                                                          self.book.price * self.quantity)

    def save(self, *args, **kwargs):
        self.cart.count += self.quantity
        self.cart.total += self.quantity * self.book.price
        self.cart.updated = datetime.now()
        self.cart.save()
        super(Item, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.cart.count -= self.quantity
        self.cart.total -= self.quantity * self.book.price
        self.cart.updated = datetime.now()
        self.cart.save()
        super(Item, self).delete(*args, **kwargs)
