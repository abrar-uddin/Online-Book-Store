from .models import ShoppingCart, Item, Book
from .serializer import ShoppingCartSerializer, ItemSerializer, UserSerializer, BookSerializer
from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action

# API Auth
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, \
    TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()


class ShoppingCartViewSet(viewsets.ModelViewSet):
    serializer_class = ShoppingCartSerializer
    queryset = ShoppingCart.objects.all()

    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ShoppingCart.objects.filter(user=user)

    @action(detail=True, methods=['get'])
    def get_cart_total(self, request, pk=None):
        data = ShoppingCart.objects.get(pk=pk).get_total()
        return Response(data)

    @action(detail=True, methods=['get'])
    def get_cart_items(self, request, pk=None):
        data = ShoppingCart.objects.get(pk=pk).get_cart_items()
        serializer = ItemSerializer(data, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def get_cart_books(self, request, pk=None):
        data = ShoppingCart.objects.get(pk=pk).get_cart_books()
        serializer = BookSerializer(data, many=True)
        return Response(serializer.data)


class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
