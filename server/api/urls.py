from django.urls import path
import views

urlpatterns = [
    path('home', views.api_home)
]