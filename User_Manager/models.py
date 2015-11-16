from django.db import models
from django.contrib.auth.models import User

class User_Profile(models.Model):
    user = models.OneToOneField(User)
    registered_type = models.IntegerField(default=0)

    class Meta:
        abstract = True


class Student(User_Profile):
    age = models.IntegerField(default=0)
    overall_score = models.IntegerField(default=0)


class Teacher(User_Profile):
    experience = models.IntegerField(default=0)