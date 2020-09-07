from django.urls import path, include
from .views import ShoppingCartViewSet, ItemViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('shopping_cart', ShoppingCartViewSet, basename='shopping_cart')
router.register('item', ItemViewSet, basename='item')

urlpatterns = [
    path('api/', include(router.urls)),
]
