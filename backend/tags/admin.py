from django.contrib import admin
from .models import QuestionType, Tag, Company, JobRole

admin.site.register(QuestionType)
admin.site.register(Tag)
admin.site.register(Company)
admin.site.register(JobRole)
