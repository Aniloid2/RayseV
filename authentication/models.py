from __future__ import unicode_literals
# from django.forms import ModelForm

# from django import forms

from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
# Create your models here.
#user profiles not a Test
#out dated facebookprofle
# class FacebookProfile(models.Model):
# 	user = models.OneToOneField(User, on_delete = models.CASCADE)

# 	id = models.PositiveIntegerField(primary_key = True)
# 	#name = models.CharField(max_length = 200, null = True)
# 	year_formed = models.PositiveIntegerField(default = 0)
# 	webpull= models.CharField(max_length =1000, null = True)
# 	score = models.PositiveIntegerField(default = 0, editable = True)
# 	times_called = models.PositiveIntegerField(default = 0, editable = True)
# 	level = models.FloatField(default = 0, editable =True)


# i models have a myuser as abstractuser, username, as id, 


# the userhandler just like before but now serves the creatuion of a user no superuser

class MyUserManager(BaseUserManager):



	def create_user(self, username_id ,first_name , last_name ): #add first and last name
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

	


################ ARCHIVE Model authentication lvl3 ##############




# class MyUserManager(BaseUserManager):

# 	def create_superuser(self, user):
# 		user = self.create_user(
# 			email,
# 			password=password,
# 			date_of_birth=date_of_birth,
# 			)
# 		user.is_admin = True
# 		user.save(using=self._db)
# 		return user

# 	def create_user(self, username): 
# 		"""
# 		Creates and saves a User without password. Username is an integer given by the facebook api ID
# 		"""
# 		print (username)

# 		user = self.model(
# 		    username=username,

# 		)
# 		print (user)

# 		user.save(using=self._db)
# 		return user





# class MyUser(AbstractBaseUser):
# 	username = models.PositiveIntegerField(
# 		verbose_name='username',
# 		primary_key = True,
# 	)

# 	USERNAME_FIELD = 'username'
# 	is_active = models.BooleanField(default=True)
# 	is_admin = models.BooleanField(default=False)

# 	objects = MyUserManager()

# 	def get_username(self):

# 		return self.username

	# def get_username_id(self):
	# 		# The user is identified by their username
	# 		return self.username_id

	# 	def has_perm(self, perm, obj=None):
	# 		"Does the user have a specific permission?"
	# 		# Simplest possible answer: Yes, always
	# 		return True

	# 	def has_module_perms(self, app_label):
	# 		"Does the user have permissions to view the app `app_label`?"
	# 		# Simplest possible answer: Yes, always
	# 		return True

	# 	@property
	# 	def is_staff(self):
	# 		"Is the user a member of staff?"
	# 		# Simplest possible answer: All admins are staff
	# 		return self.is_admin




# class ModtestMod(models.Model):
# 	user = models.OneToOneField(
# 		MyUser, 
# 		on_delete=models.CASCADE,
# 		)

# 	nameof = models.PositiveIntegerField(default = 0)

# 	def get_id(self):
# 		return self.id
