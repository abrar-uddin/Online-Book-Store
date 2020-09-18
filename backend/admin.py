from django.contrib import admin
from .models import Book, ShoppingCart, Item

# Register your models here.

admin.site.register(Book)
admin.site.register(ShoppingCart)
admin.site.register(Item)
