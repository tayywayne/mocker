from django.urls import path
from . import views

urlpatterns = [
    path("", views.getInterviews, name="getInterviews"),
    path("create/", views.createInterview, name="createInterview"),
    path("<int:pk>/", views.getInterview, name="getInterview"),

    path("responses/", views.getResponses, name="getResponses"),
    path("responses/<int:pk>/", views.getResponsesForInterview,
         name="getResponsesForInterview"),
    path("responses/create/", views.createResponse, name="createResponse"),
]
