from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer, UserSerializerWithToken
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from interviews.models import Interview
from interviews.serializers import InterviewSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data


# aka log in
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# get user account info
@api_view(['GET'])
def getUserAccount(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


# register user account
@api_view(['POST'])
def registerUser(request):
    data = request.data

    try:
        user = User.objects.create(
            username=data['username'],
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email or username already exists.'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

# update user account
@api_view(['PUT'])
def updateUserAccount(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    data = request.data
    user.email = data['email']
    if 'password' in data:
        user.password = make_password(data['password'])
    user.save()
    return Response(serializer.data)


# get all interviews for a user
@api_view(['GET'])
def getUserInterviews(request):
    user = request.user
    interviews = Interview.objects.filter(user=user)
    serializer = InterviewSerializer(interviews, many=True)
    return Response(serializer.data)
