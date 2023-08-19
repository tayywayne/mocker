from django.shortcuts import render
from rest_framework.response import Response as DRFResponse
# imported asalias becuase of Response model in this file is also used
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Interview, Response
from .serializers import InterviewSerializer, ResponseSerializer
from questions.models import Question
from tags.models import Company, JobRole
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def getInterviews(request):
    interviews = Interview.objects.all()
    serializer = InterviewSerializer(interviews, many=True)
    return DRFResponse(serializer.data)

@permission_classes([IsAuthenticated])
@api_view(['POST'])
def createInterview(request):
    data = request.data

    number_of_questions = data.get('number', 0)
    tags = data.get('tags')

    try:
        company_instance = Company.objects.get(id=data.get('company'))
        job_role_instance = JobRole.objects.get(id=data.get('job_role'))
    except (Company.DoesNotExist, JobRole.DoesNotExist):
        return Response(status=status.HTTP_400_BAD_REQUEST)

    matching_questions = Question.objects.filter(
        tags__in=tags,
        company=company_instance,
        job_role=job_role_instance
    ).distinct()

    if matching_questions.count() < number_of_questions:
        additional_questions_needed = matching_questions.count() - number_of_questions.count()
        additional_questions = Question.objects.exclude(id__in=matching_questions).order_by('?')[:additional_questions_needed]
        selected_questions = list(matching_questions) + list(additional_questions)
    else:
        selected_questions = list(matching_questions.order_by('?')[:number_of_questions])

    interview = Interview.objects.create(
        user=request.user,
        company=company_instance,
        job_role=job_role_instance,
    )
    interview.questions.set(selected_questions)

    for tag in tags:
        interview.tags.add(tag)

    serializer = InterviewSerializer(interview)

    return DRFResponse(serializer.data, status=status.HTTP_201_CREATED)
