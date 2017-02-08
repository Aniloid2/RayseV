from django.db import models

from django.forms import ModelForm

from django.contrib.auth.models import User

from django import forms


# Create your models here.
#user profiles not a Test
class FacebookProfile(models.Model):
	user = models.OneToOneField(User, on_delete = models.CASCADE)

	id = models.PositiveIntegerField(primary_key = True)
	#name = models.CharField(max_length = 200, null = True)
	year_formed = models.PositiveIntegerField(default = 0)
	webpull= models.CharField(max_length =1000, null = True)
	score = models.PositiveIntegerField(default = 0, editable = True)
	times_called = models.PositiveIntegerField(default = 0, editable = True)
	level = models.FloatField(default = 0, editable =True)