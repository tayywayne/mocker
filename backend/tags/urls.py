from django.urls import path
from . import views

urlpatterns = [
    path("tags/", views.getTags, name="gettags"),
    path("companies/", views.getCompany, name="getcompanies"),
    path("jobroles/", views.getJobRole, name="getjobroles"),
    path("questiontypes/", views.getQuestionType, name="getquestiontypes"),
]
