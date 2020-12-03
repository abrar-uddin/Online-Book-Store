from profiles.models import Address
from rest_framework import viewsets, permissions
from .serializers import AddressSerializer
from .serializers import CardSerializer
from .serializers import DetailSerializer

#Address Viewset
class AddressViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = AddressSerializer

    def get_queryset(self):
        return self.request.user.profiles.all()


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CardViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CardSerializer

    def get_queryset(self):
        return self.request.user.profiles.all()


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class DetailViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = DetailSerializer

    def get_queryset(self):
        return self.request.user.profiles.all()


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)