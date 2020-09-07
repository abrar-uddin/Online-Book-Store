from django.urls import path, include
from .views import ShoppingCartViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('shopping_cart', ShoppingCartViewSet, basename='shopping_cart')

urlpatterns = [
    path('api/', include(router.urls)),
]