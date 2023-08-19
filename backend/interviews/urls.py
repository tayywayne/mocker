from django.urls import path
from . import views

urlpatterns = [
    path("", views.getInterviews, name="getInterviews"),
    path("create/", views.createInterview, name="createInterview"),
]
