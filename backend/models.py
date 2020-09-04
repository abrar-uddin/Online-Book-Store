from django.db import models
from django.core import validators


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

    def __str__(self):
        return self.name
