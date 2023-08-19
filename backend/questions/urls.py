from django.urls import path
from . import views

urlpatterns = [
    path("", views.getQuestions, name="getQuestions"),
    path("<int:pk>", views.getQuestion, name="getQuestion"),
]
