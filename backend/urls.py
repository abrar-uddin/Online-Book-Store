from django.urls import path, include
from .views import ShoppingCartViewSet, ItemViewSet, UserViewSet, BookViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('book', BookViewSet, basename='book')
router.register('shopping_cart', ShoppingCartViewSet, basename='shopping_cart')
router.register('item', ItemViewSet, basename='item')
router.register('user', UserViewSet, basename='user')

urlpatterns = [
    path('api/', include(router.urls)),
]
