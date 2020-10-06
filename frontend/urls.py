from django.urls import path, include
from . import views

urlpatterns = [
    path('descriptions/',views.index, name="index")
]
