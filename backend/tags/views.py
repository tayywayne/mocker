from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import QuestionType, Tag, Company, JobRole
from .serializers import QuestionTypeSerializer, TagSerializer, CompanySerializer, JobRoleSerializer


# veiws for tags
@api_view(['GET', 'POST'])
def getTags(request):
    if request.method == 'GET':
        tags = Tag.objects.all()
        serializer = TagSerializer(tags, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TagSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# views for companies
@api_view(['GET', 'POST'])
def getCompany(request):
    if request.method == 'GET':
        company = Company.objects.all()
        serializer = CompanySerializer(company, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# views for job roles
@api_view(['GET', 'POST'])
def getJobRole(request):
    if request.method == 'GET':
        jobRole = JobRole.objects.all()
        serializer = JobRoleSerializer(jobRole, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = JobRoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# views for question types
@api_view(['GET', 'POST'])
def getQuestionType(request):
    if request.method == 'GET':
        questionType = QuestionType.objects.all()
        serializer = QuestionTypeSerializer(questionType, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = QuestionTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
