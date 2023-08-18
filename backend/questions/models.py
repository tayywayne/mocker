from django.db import models


class Question(models.Model):
    tags = models.ManyToManyField('tags.Tag', null=True, blank=True)
    company = models.ManyToManyField('tags.Company', null=True, blank=True)
    job_role = models.ManyToManyField('tags.JobRole', null=True, blank=True)
    question_type = models.ForeignKey('tags.QuestionType', on_delete=models.PROTECT, null=True, blank=True)
    question = models.TextField()

    def __str__(self):
        return self.question
