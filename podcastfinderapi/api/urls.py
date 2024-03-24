from django.urls import path
from . import views

urlpatterns = [
    path('get-podcasts/', views.get_podcasts, name='get_podcasts'),
]