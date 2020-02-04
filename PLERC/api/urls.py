from django.urls import path
from . import views

urlpatterns = [
    path('location/<str:ville>/<str:adresse>', views.location),
    path('path/<str:ville>/<int:source>/<int:destination>', views.path),
    path('path/<str:ville>/<int:source>/<int:destination>/data', views.path_data),
]