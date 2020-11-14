from django.db import models
from django.core import validators


# Create your models here.

class Book(models.Model):
    image = models.CharField(max_length=100)
    name = models.CharField(max_length=500)
    author = models.CharField(max_length=100)
    book_format = models.CharField(max_length=100)
    stars = models.FloatField(validators=[validators.MinValueValidator(0), validators.MaxValueValidator(5)])
    price = models.FloatField(validators=[validators.MinValueValidator(0), validators.MaxValueValidator(500)])
    currency = models.CharField(max_length=1)
    isbn = models.CharField(max_length=13)
    category = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    release_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.name


class Item(models.Model):
    quantity = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(99)])
    book = models.ForeignKey('Book', related_name='book_item', on_delete=models.CASCADE)
    user = models.ForeignKey('auth.User', related_name='user_item', on_delete=models.CASCADE)

    def __str__(self):
        return "({}) {}".format(self.quantity, self.book.name)

    def get_books(self):
        return self.book

    def save(self, *args, **kwargs):
        super(Item, self).save(*args, **kwargs)
        cart, _ = ShoppingCart.objects.get_or_create(user=self.user)
        cart.update_cart()
        cart.save()

    def get_price(self):
        return self.quantity * self.book.price


class ShoppingCart(models.Model):
    order_date = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    items = models.ManyToManyField(Item, blank=True)
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)

    def get_cart_items(self):
        return self.items.all()

    def get_cart_books(self):
        items = self.get_cart_items()
        books = [item.get_books() for item in items]

        return books

    def get_total(self):
        return round(sum([items.get_price() for items in self.get_cart_items()]), 2)

    def update_cart(self):
        self.items.set(Item.objects.filter(user=self.user))

    def delete(self, *args, **kwargs):
        to_delete = Item.objects.filter(user=self.user)
        to_delete.delete()

        super(ShoppingCart, self).delete(*args, **kwargs)

    def __str__(self):
        return "{} has {} in their cart. Their total is ${}".format(self.user, self.get_cart_items(),
                                                                    self.get_total())


class SavedItem(models.Model):
    quantity = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(99)])
    book = models.ForeignKey('Book', related_name='book_saveditem', on_delete=models.CASCADE)
    user = models.ForeignKey('auth.User', related_name='user_saveditem', on_delete=models.CASCADE)

    def __str__(self):
        return "({}) {}".format(self.quantity, self.book.name)

    def get_books(self):
        return self.book

    def save(self, *args, **kwargs):
        super(SavedItem, self).save(*args, **kwargs)
        cart, _ = SavedList.objects.get_or_create(user=self.user)
        cart.update_cart()
        cart.save()

    def get_price(self):
        return self.quantity * self.book.price


class SavedList(models.Model):
    order_date = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    items = models.ManyToManyField(SavedItem, blank=True)
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)

    def get_cart_items(self):
        return self.items.all()

    def get_cart_books(self):
        items = self.get_cart_items()
        books = [item.get_books() for item in items]

        return books

    def get_total(self):
        return round(sum([items.get_price() for items in self.get_cart_items()]), 2)

    def update_cart(self):
        self.items.set(SavedItem.objects.filter(user=self.user))

    def delete(self, *args, **kwargs):
        to_delete = SavedItem.objects.filter(user=self.user)
        to_delete.delete()

        super(SavedList, self).delete(*args, **kwargs)

    def __str__(self):
        return "{} has {} in their cart. Their total is ${}".format(self.user, self.get_cart_items(),
                                                                    self.get_total())
