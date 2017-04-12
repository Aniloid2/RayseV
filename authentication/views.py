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
		
		user_form = FacebookUserForm(data = request.POST)
		profile_form = FacebookProfileForm()



		first_name = request.POST.get('first_name')
		last_name = request.POST.get('last_name')
		webpull = request.POST.get('webpull')
		username_id = request.POST.get('username_id')
		ipaddress = request.POST.get("ip")

		print (first_name, last_name, username_id, ipaddress)

		auth_user = authenticate(name = username_id)

		if auth_user:
			print ('this user has an account')
			login(request, auth_user)
			print ('this user has been logged in')
			return HttpResponseRedirect("/home/")

		else:
			print ('this user has not got account... creating')
			try :
				user = MyUser.objects.create_user(username_id = username_id , first_name = first_name, last_name = last_name)
				pass
			except Exception as e:
				print (e)


			print ('MyUser has been created')
			try:
				FacebookProfile.objects.create(user = user, webpull = webpull)
			except Exception as e:
				print (e)

			print ('Barebones put in place, Linked with FacebookProfile')


			facebook_from_backend = MyUser.objects.get(username_id = username_id)
			print ('first name retrived', facebook_from_backend.first_name)

			auth_user = authenticate(name = username_id)
			login(request, auth_user)
			# return HttpResponseRedirect('/extra_details/')

			return HttpResponseRedirect('/home/')




def logoutZ(request):
	if request.method == "GET":
		if request.user.is_authenticated:
			print ('user is autenticated, loging him out')
			logout(request)
			return HttpResponseRedirect('/login/')
		else:
			print ('user ins not autenticated')
			return HttpResponseRedirect('/login/')


def extra_details(request):
	if request.method == "GET":
		print ("getting the extra details page")
		return render(request, 'authapp/extra_details.html')

	if request.method == "POST":
		age = request.POST.get('age')
		gender = request.POST.get('gender')
		print (age, gender)
		if request.user.is_authenticated:
			#need to have a function that gets the value
			# or for non protected need to have all minusle
			request.user.facebookprofile.age = age
			if ((gender == 'M') | (gender == 'F')):
				print ('Passes right Char')
				request.user.facebookprofile.gender = gender
			
			else:
				print ('Must be either M or F')
				return render(request, 'authapp/extra_details.html')
			print ('Im authenticated', request.user.facebookprofile.gender)
			request.user.facebookprofile.save()
			return HttpResponseRedirect('/login/')

		else:
			print ('Im not authenticated')
			return HttpResponseRedirect('/login/')


# aloso add a delete account 


