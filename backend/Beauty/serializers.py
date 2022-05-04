from rest_framework import serializers
from .models import Beauty

class BeautySerializer(serializers.ModelSerializer):
    class Meta:
        model = Beauty
        fields = ['id', 'make', 'model', 'year', 'price']