from django.urls import path
from .views import (
    MyTokenObtainPairView,
    getUserAccount,
    registerUser,
    updateUserAccount,
    getUserInterviews
    )
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('account/', getUserAccount, name='get_user_account'),
    path('register/', registerUser, name='register_user'),
    path('account/update/', updateUserAccount, name='update_user_account'),
    path('interviews/', getUserInterviews, name='get_user_interviews'),
]
