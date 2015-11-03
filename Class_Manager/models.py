from django.db import models
from User_Manager.models import Student
# Create your models here.

class Attendence(models.Model):
	student = models.ForeignKey(Student, null = True)
	datetime = models.DateTimeField(auto_now=True)

class Points(models.Model):
	student = models.ForeignKey(Student, null = True)
	points = models.IntegerField(default=0)

class Behavior(models.Model):
	behavior_name = models.CharField(max_length=100)
	points = models.IntegerField(default=0)
