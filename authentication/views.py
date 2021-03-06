#special django packages
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
#link with app forms

from .forms import FacebookUserForm, FacebookProfileForm

#link to app models

from authentication.models import MyUser , FacebookProfile


#miscaleneous packages
import re
import random
import requests
import json

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
		id_username = 'error'
		firebase_payload = ({
			'Users' : {

			}
			})
		print ('recived data from anonimus user')
		
		user_form = FacebookUserForm(data = request.POST)
		profile_form = FacebookProfileForm()



		first_name = request.POST.get('first_name')
		last_name = request.POST.get('last_name')
		webpull = request.POST.get('webpull')
		username_id = request.POST.get('username_id')
		ipaddress = request.POST.get("ip")

		print (first_name, last_name, username_id, ipaddress, webpull)

		auth_user = authenticate(name = username_id)

		if auth_user:
			print ('this user has an account')

			if ((auth_user.facebookprofile.webpull) != (webpull)): 
			# update picture with post request
			# get user male or fmal, user id, details , webpull 
				auth_user.facebookprofile.webpull = webpull
				user_gender = auth_user.facebookprofile.gender
				print (user_gender)
				user_termp_id = auth_user.username_id
				print (user_termp_id)


				firebase_payload = {
						'Webpull': auth_user.facebookprofile.webpull,
				} 

				URL = 'https://rayse-1d175.firebaseio.com/Users/' + auth_user.facebookprofile.gender + '/' + str(auth_user.username_id) + '/Details.json'
				print (URL)

				print (firebase_payload)

				

				r = requests.patch(URL, data=json.dumps(firebase_payload))








			login(request, auth_user)
			print ('this user has been logged in')
			return HttpResponseRedirect("/home/")

		else:
			print ('this user has not got account... creating')
			try :
				#still create an authentication entry for backend pyton use
				user = MyUser.objects.create_user(username_id = username_id , first_name = first_name, last_name = last_name)
				pass
			except Exception as e:
				print (e)


			print ('MyUser has been created')
			try:
				#in this case with firebase we dont have a facebook profile anymore
				#create payload with empty level etc =0, and put apropriate entryes
				FacebookProfile.objects.create(user = user, webpull = webpull)

			except Exception as e:
				print (e)

			print ('Barebones put in place, Linked with FacebookProfile')


			facebook_from_backend = MyUser.objects.get(username_id = username_id)
			print ('first name retrived', facebook_from_backend.first_name)

			auth_user = authenticate(name = username_id)
			login(request, auth_user)
			return HttpResponseRedirect('/extra_details/')

			# return HttpResponseRedirect('/home/')




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

			# load all data pass it to firebase
			firebase_payload = {
				'Details' : {
					'Name' : request.user.first_name,
					'Surname' : request.user.last_name,
					'Age': request.user.facebookprofile.age,
					'Score': 0,
					'Times_called':0,
					'Level':0,
					'Webpull': request.user.facebookprofile.webpull,

				},
				'Matched' : {

				},
				'Topped' : {

				},
				'Status': 'Offline',

			} 

			URL = 'https://rayse-1d175.firebaseio.com/Users/' + request.user.facebookprofile.gender + '/' + str(request.user.username_id) +'.json'
			print (URL)

			print (firebase_payload)

			r = requests.patch(URL, data=json.dumps(firebase_payload))



			return HttpResponseRedirect('/home/')

		else:
			print ('Im not authenticated')
			return HttpResponseRedirect('/login/')


# aloso add a delete account 


def delete_account(request):
	if request.method == 'GET':
		if request.user.is_authenticated:

			request_deletion_user_id = request.user.username_id
			print ('requested the users delition request',request_deletion_user_id, isinstance(request_deletion_user_id, int))
			user_to_delete = MyUser.objects.get(username_id = request_deletion_user_id)

			print ('users first name', user_to_delete.first_name)

			

			user_to_delete.delete()

			logout(request)
			
			return HttpResponse(json.dumps({'deleted':'Delition Accomplished'}),content_type="application/json" )
		else:
			print ('this user is not auth on delete_account')
			return HttpResponse(json.dumps({'deleted':'Delition Abborted Not Authenticated'}),content_type="application/json" )



#get current user details

	# $.get(
	# 				"/logout",
	# 				function(){
	# 					console.log('both deleted and loggged out')
	# 				}
	# 				)