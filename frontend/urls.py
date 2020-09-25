from django.urls import path, include
from . import views

urlpatterns = [
    path('shopping_cart/', views.shopping_cart),
]
