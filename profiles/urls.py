from rest_framework import routers
from .api import AddressViewSet
from .api import CardViewSet

router = routers.DefaultRouter()
router.register('api/users', AddressViewSet, 'users')
router.register('api/cards', CardViewSet, 'cards')
router.register('api/details', CardViewSet, 'details')

urlpatterns = router.urls