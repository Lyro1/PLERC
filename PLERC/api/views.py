from django.shortcuts import render
from django.http import HttpResponse, Http404

# Create your views here.
def location(request, ville, adresse):
    raise Http404

def path(request, ville, source, destination):
    raise Http404

def path_data(request, ville, destination):
    raise Http404