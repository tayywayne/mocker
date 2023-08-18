from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import QuestionType, Tag, Company, JobRole
from .serializers import QuestionTypeSerializer, TagSerializer, CompanySerializer, JobRoleSerializer


# veiws for tags
@api_view(['GET'])
def getTags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)


# views for companies
@api_view(['GET'])
def getCompany(request):
    company = Company.objects.all()
    serializer = CompanySerializer(company, many=True)
    return Response(serializer.data)


# views for job roles
@api_view(['GET'])
def getJobRole(request):
    jobRole = JobRole.objects.all()
    serializer = JobRoleSerializer(jobRole, many=True)
    return Response(serializer.data)


# views for question types
@api_view(['GET'])
def getQuestionType(request):
    questionType = QuestionType.objects.all()
    serializer = QuestionTypeSerializer(questionType, many=True)
    return Response(serializer.data)
