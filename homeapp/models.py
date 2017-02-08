from django.db import models

# Create your models here.


from django.forms import ModelForm

from django.contrib.auth.models import User

from django import forms

class Modtest(models.Model):

	user = models.OneToOneField(User, on_delete=models.CASCADE)

	nameof = models.CharField(max_length = 1000, null = True)




#we want another auth user
#for this what we want is another authbackend passwordless, 
#models without user just name
#in settings we need to enter new auth method
#update the production too

