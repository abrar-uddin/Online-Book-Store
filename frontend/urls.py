from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.index, name="index"),
    path('shopping_cart/', views.index2, name="index2"),
    path('profile_management/', views.index3, name="index3")
]