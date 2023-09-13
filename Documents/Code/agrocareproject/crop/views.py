from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import CropSerializer
from .models import Crop
# Create your views here.

class CropView(viewsets.ModelViewSet):
    serializer_class = CropSerializer
    queryset = Crop.objects.all()

def landingpage(request):
    return render(request, 'landingpage.html')

def home(request):
    return render(request, 'home.html')

