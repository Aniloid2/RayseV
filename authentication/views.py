#special django packages
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

#link with app forms

from .forms import FacebookUserForm, FacebookProfileForm

#link to app models

from authentication.models import MyUser , FacebookProfile


#miscaleneous packages
import re
import random

#authentication 
from django.contrib.auth import authenticate, login, logout



# Create your views here.
# at add account, send im to logout url, then to logout view, if get loghim out and send to register_login

def Register_login(request):
	if request.method =="GET":
		if  request.user.is_authenticated:
			print ('getting page for specific user')

			return HttpResponseRedirect('/home/')
		else:
			print ('getting login page for anonimus user')
			return render(request, 'authapp/login_user.html')

	if request.method == "POST":
		print ('recived data from anonimus user')
		#load forms 
		user_form = FacebookUserForm(data = request.POST)
		profile_form = FacebookProfileForm()



		first_name = request.POST.get('first_name')
		last_name = request.POST.get('last_name')
		webpull = request.POST.get('webpull')
		username_id = request.POST.get('username_id')

		auth_user = authenticate(name = username_id)

		if auth_user:
			print ('this user has an account')
			login(request, auth_user)
			print ('this user has been logged in')
			return HttpResponseRedirect("/home/")

		else:
			print ('this user has not got account... creating')
			user = MyUser.objects.create_user(username_id = username_id , first_name = first_name, last_name = last_name)

			FacebookProfile.objects.create(user = user, webpull = webpull)

			## small test to check user is right ##

			facebook_from_backend = MyUser.objects.get(username_id = username_id)
			print ('first name retrived', facebook_from_backend.first_name)

			auth_user = authenticate(name = username_id)
			login(request, auth_user)
			
			return HttpResponseRedirect('/home/')




#things to do: from FB we only get name, profile picture. Create
#template for form, has gender and age, (email optional)

#static file on server

#comunication app

#
def logoutZ(request):
	if request.method == "GET":
		logout(request)
		return HttpResponseRedirect('/login/')