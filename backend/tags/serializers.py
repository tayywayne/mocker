from rest_framework import serializers
from .models import QuestionType, Tag, Company, JobRole


class QuestionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionType
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class JobRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobRole
        fields = '__all__'
