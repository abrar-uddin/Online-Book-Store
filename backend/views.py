from .models import ShoppingCart, Item, Book
from .serializer import ShoppingCartSerializer, ItemSerializer, UserSerializer, BookSerializer
from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination

# API Auth
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, \
    TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# TODO: Delete when auth has been implemented
class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

# Create your views here.

# class StandardResultsSetPagination(PageNumberPagination):
#     page_size = 20
#     page_size_query_param = 'page_size'
#     max_page_size = 20

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filter_fields = ('category','stars')
    ordering_fields = ('category', 'name', 'author', 'price', 'stars', 'release_date')
    # ordering = ('name')
    # pagination_class = StandardResultsSetPagination

class ShoppingCartViewSet(viewsets.ModelViewSet):
    serializer_class = ShoppingCartSerializer
    queryset = ShoppingCart.objects.all()

    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]

    def get_queryset(self):
        user = self.request.user
        return ShoppingCart.objects.filter(user=user)

    @action(detail=True, methods=['get'])
    def get_cart_total(self, request, pk=None):
        data = ShoppingCart.objects.get(pk=pk).get_total()
        return Response(data)

    def get_cart_items(self, request, pk=None):
        data = ShoppingCart.objects.get(pk=pk).get_cart_items()
        serializer = ItemSerializer(data, many=True)
        return serializer

    def get_cart_books(self, request, pk=None):
        data = ShoppingCart.objects.get(pk=pk).get_cart_books()
        serializer = BookSerializer(data, many=True)
        return serializer

    @action(detail=True, methods=['get'])
    def get_cart(self, request, pk=None):
        books = self.get_cart_books(request, pk).data
        items = self.get_cart_items(request, pk).data

        def find_item(look):
            for x in items:
                if look == x['book']:
                    return x

        for book in books:
            item = find_item(book['id'])
            book.update({"item_id": item['id']})
            book.update({"quantity": item['quantity']})
            book.update({"unit_price": book['price']})
            book['price'] = round(book['price'] * item['quantity'], 2)
            book.update({"user": request.user.id})

        return Response(books)


class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]

    def get_queryset(self):
        user = self.request.user
        return Item.objects.filter(user=user)


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

