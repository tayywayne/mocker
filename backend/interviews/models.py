from django.db import models
from django.contrib.auth.models import User


class Interview(models.Model):
    questions = models.ManyToManyField('questions.Question')
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    company = models.ForeignKey('tags.Company', on_delete=models.PROTECT, null=True, blank=True)
    job_role = models.ForeignKey('tags.JobRole', on_delete=models.PROTECT, null=True, blank=True)
    tags = models.ManyToManyField('tags.Tag', null=True, blank=True)

    def __str__(self):
        return self.user.username + ' ' + str(self.created_at)


class Response(models.Model):
    interview = models.ForeignKey(Interview, on_delete=models.PROTECT)
    question = models.ForeignKey('questions.Question', on_delete=models.PROTECT)
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.interview.id)
