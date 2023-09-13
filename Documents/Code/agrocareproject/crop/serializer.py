from rest_framework import serializers
from .models import Crop

class CropSerializer(serializers.ModelSerializer):
    class Meta:
         model = Crop
       # fields = ('name', 'scientific_name', 'family', 'gender', 'description', 'image', 'soil_type', 'soil_components', 'irrigation_parameters', 'crop_type', 'harvest_time', 'max_temperature', 'min_temperature', 'location')
         fields = '__all__'
