from rest_framework import serializers
from profiles.models import Address
from profiles.models import CreditCard
from profiles.models import Details

#User Serializer
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditCard
        fields = '__all__'

class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = '__all__'    