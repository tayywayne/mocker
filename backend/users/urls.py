from django.urls import path
from .views import MyTokenObtainPairView, getUserAccount
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('account/', getUserAccount, name='get user account'),
]
