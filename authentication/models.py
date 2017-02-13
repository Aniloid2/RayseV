from __future__ import unicode_literals
# from django.forms import ModelForm

# from django import forms

from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

class MyUserManager(BaseUserManager):



	def create_user(self, username_id ,first_name , last_name ): 
		"""
		Creates and saves a User without password. Username is an integer given by the facebook api ID
		"""
		# if not email:
		#     raise ValueError('Users must have an email address')


		user = self.model(
		    username_id=username_id,
			first_name = first_name,
			last_name = last_name,
		)

		user.save(using=self._db)
		return user




#class of facebook profile 
class MyUser(AbstractBaseUser):
	username_id = models.PositiveIntegerField(
		verbose_name='username_id',
		primary_key = True,
	)

	USERNAME_FIELD = 'username_id'


	is_active = models.BooleanField(default=True)
	is_admin = models.BooleanField(default=False)


	first_name = models.CharField(
		verbose_name="name",
		max_length = 100,
		)

	last_name = models.CharField(
		verbose_name="surname",
		max_length = 100,

		)

	objects = MyUserManager()

	class Meta:
		managed = True



	def get_username_id(self):
		# The user is identified by their username
		return self.username_id

	def has_perm(self, perm, obj=None):
		"Does the user have a specific permission?"
		# Simplest possible answer: Yes, always
		return True

	def has_module_perms(self, app_label):
		"Does the user have permissions to view the app `app_label`?"
		# Simplest possible answer: Yes, always
		return True

	@property
	def is_staff(self):
		"Is the user a member of staff?"
		# Simplest possible answer: All admins are staff
		return self.is_admin




#class of the extension of the facebook profile 
class FacebookProfile(models.Model):
	user = models.OneToOneField(
		MyUser, 
		on_delete=models.CASCADE,
		)

	age = models.PositiveIntegerField(
		default = 0,
		editable = True,
		)

	gender = models.CharField(
		max_length = 1,
		default = "N", 
		editable = True,
		)

	webpull= models.CharField(
		max_length =1000, 
		null = True,
		)

	score = models.PositiveIntegerField(
		default = 0, 
		editable = True,
		)

	times_called = models.PositiveIntegerField(
		default = 0,
		editable = True
		)

	level = models.FloatField(
		default = 0, 
		editable =True,
		)
	class Meta:
		managed = True

	
