from django.urls import path
from . import views

urlpatterns = [
    path('location/<str:ville>/<str:adresse>', views.location),
    path('path/<str:ville>/<str:source>/<str:destination>', views.path),
    path('path/<str:ville>/<str:source>/<str:destination>/data', views.path_data),
]