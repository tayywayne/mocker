from rest_framework import serializers
from .models import Question
from tags.models import Tag, Company, JobRole, QuestionType


class QuestionSerializer(serializers.ModelSerializer):
    tags = serializers.PrimaryKeyRelatedField(many=True, queryset=Tag.objects.all())
    company = serializers.PrimaryKeyRelatedField(many=True, queryset=Company.objects.all())
    job_role = serializers.PrimaryKeyRelatedField(many=True, queryset=JobRole.objects.all())
    question_type = serializers.PrimaryKeyRelatedField(queryset=QuestionType.objects.all())

    class Meta:
        model = Question
        fields = '__all__'
