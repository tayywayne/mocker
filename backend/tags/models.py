from django.db import models


class QuestionType(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Company(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class JobRole(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
