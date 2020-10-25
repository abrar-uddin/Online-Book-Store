from django.urls import path, include
from .views import ShoppingCartViewSet, ItemViewSet, UserViewSet, BookViewSet, SavedListViewSet, SavedItemViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('book', BookViewSet, basename='book')
router.register('shopping_cart', ShoppingCartViewSet, basename='shopping_cart')
router.register('item', ItemViewSet, basename='item')
router.register('saved_items_list', SavedListViewSet, basename='saved_list')
router.register('saved_item', SavedItemViewSet, basename='saved_item')
router.register('user', UserViewSet, basename='user')

urlpatterns = [
    path('api/', include(router.urls)),
]
