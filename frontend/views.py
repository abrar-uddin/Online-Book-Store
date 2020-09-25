from django.shortcuts import render
from backend.models import ShoppingCart

# Create your views here.


def shopping_cart(request):
    cart = ShoppingCart.objects.get()
    return render(request, "frontend/shopping_cart.html")
