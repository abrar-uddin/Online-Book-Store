from django.shortcuts import render
from django.utils.datetime_safe import datetime

from .models import ShoppingCart, Item
from .serializer import ShoppingCartSerializer, ItemSerializer

from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets
from django.shortcuts import get_object_or_404

# API Auth
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, \
    TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.


class ShoppingCartViewSet(viewsets.ModelViewSet):
    serializer_class = ShoppingCartSerializer
    queryset = ShoppingCart.objects.all()


class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
