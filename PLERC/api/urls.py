from django.urls import path
from . import views

urlpatterns = [
    path('location/<str:ville>/<str:adresse>', views.location),
    path('path/<int:trafic>/<str:ville>/<str:source>/<str:destination>/<str:algo>', views.path),
    path('path/<int:trafic>/<str:ville>/<str:source>/<str:destination>/<str:algo>/data', views.path_data),
]