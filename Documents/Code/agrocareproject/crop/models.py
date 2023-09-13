from django.db import models

# Create your models here.

class Crop(models.Model):
    name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=100, blank=True, null=True)
    family = models.CharField(max_length=100, blank=True, null=True)
    gender = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(max_length=250)
    soil_type = models.CharField(max_length=100)
    soil_components = models.TextField(max_length=300, blank=True, null=True)
    irrigation_parameters = models.TextField(max_length=300, blank=True, null=True)
    crop_type = models.CharField(max_length=100)
    harvest_time = models.CharField(max_length=100)
    max_temperature = models.IntegerField(blank=True, null=True)
    min_temperature = models.IntegerField(blank=True, null=True)
    location = models.CharField(blank=True, null=True, max_length=100)

    def __str__(self):
        return self.name
    


    