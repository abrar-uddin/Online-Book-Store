from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    return render(request, "frontend/base.html")

def index2(request):
    return render(request, "frontend/shopping_cart.html")


def index3(request):
    return render(request, "frontend/profile_management.html")