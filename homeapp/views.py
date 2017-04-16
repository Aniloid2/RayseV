#special django packages

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect



#models from authentification app

from authentication.models import FacebookProfile, MyUser

from django.contrib.auth import authenticate, login, logout


#miscaleneous packages
import re
import random
import json
import requests

def home(request):

	if request.method == "GET":
		print ("got request")
		users = FacebookProfile.objects.all()
		total_users = users.count()

		print (total_users)

		ids =[]
		for item in users:
			id_ = item.id

			ids.append(id_)

		ids_shuffled = random.sample(ids, 3)

		print (ids_shuffled)



		user_1 = FacebookProfile.objects.get(pk = ids_shuffled[0])
		user_2 = FacebookProfile.objects.get(pk = ids_shuffled[1])
		user_3 = FacebookProfile.objects.get(pk = ids_shuffled[2])


		print (user_1)
		if request.user.is_authenticated:
		 	print ('im auth')
		 	print (request.user.facebookprofile.gender)
		 	user_default = request
		else:
		 	print ('never mind')
		 	user_default = {'gender' : 'N'}
	



		return render(request, 'homeapp/homepage.html', { 'total_users' : total_users, 'user_1':user_1, 'user_2': user_2,\
			'user_3':user_3, 'user_default':user_default})



	if request.method == "POST":
		print ('It has been posted back')



		try:
			user_1 = request.POST.get('user_1')
			print ('first user', user_1)
			user_2 = request.POST.get('user_2')
			user_3 = request.POST.get('user_3')
			left_most_liked = [user_1, user_2, user_3]

			score = 3
			for item in left_most_liked:
				user =  MyUser.objects.get(username_id = item)
				user.facebookprofile.score += score
				score -= 1
				user.facebookprofile.times_called +=1
				user.facebookprofile.level = float(user.facebookprofile.score)/float(user.facebookprofile.times_called)
				print (user.username_id, user.facebookprofile.score, user.facebookprofile.times_called, user.facebookprofile.level)
				user.facebookprofile.save()
		except Exception as e:
			print (e) 

		return HttpResponseRedirect('/home/')





def get_users(request):
	if request.method == "GET":
		print ("got request")
		if request.user.is_authenticated:
			user_gender = request.user.facebookprofile.gender
			if (user_gender == 'M'):
				show_gender = 'F'
			elif (user_gender == 'F'):
				show_gender = 'M'
			else:
				HttpResponseRedirect('/login')
		else:
			print ('user is not authenticated')
			show_gender = 'F'
			## show animals as a marketing stunt?

		#users = FacebookProfile.objects.all() # GETS ALL USERS
		users = FacebookProfile.objects.filter(gender = show_gender)
		print ('FILTERED', users)
		total_users = users.count()

		print (total_users)

		ids =[]
		for item in users:
			id_ = item.id

			ids.append(id_)

		ids_shuffled = random.sample(ids, 3)

		print (ids_shuffled)



		user_1 = FacebookProfile.objects.get(pk = ids_shuffled[0])
		user_2 = FacebookProfile.objects.get(pk = ids_shuffled[1])
		user_3 = FacebookProfile.objects.get(pk = ids_shuffled[2])


		print (user_1)
		return HttpResponse(json.dumps({
			'user_1': str(user_1.user.username_id),
			'user_2': str(user_2.user.username_id),
			'user_3': str(user_3.user.username_id),
			}), content_type="application/json")

	if request.method == 'POST':
		print ('It has been posted back')



		try:
			user_1 = request.POST.get('user_1')
			print ('first user', user_1)
			user_2 = request.POST.get('user_2')
			user_3 = request.POST.get('user_3')
			left_most_liked = [user_1, user_2, user_3]

			score = 3
			for item in left_most_liked:
				user =  MyUser.objects.get(username_id = item)
				user.facebookprofile.score += score
				
				user.facebookprofile.times_called +=1
				user.facebookprofile.level = float(user.facebookprofile.score)/float(user.facebookprofile.times_called)
				print (user.username_id, user.facebookprofile.score, user.facebookprofile.times_called, user.facebookprofile.level)
				user.facebookprofile.save()

				URL = 'https://rayse-1d175.firebaseio.com/Users/' + user.facebookprofile.gender + '/' + str(user.username_id) +'/Details.json'
				print (URL)

				firebase_score_upload = {

				'Level': user.facebookprofile.level,
				'Score': user.facebookprofile.score,
				'Times_called': user.facebookprofile.times_called,

				}

				score -= 1

				print (firebase_score_upload)

				r = requests.patch(URL, data=json.dumps(firebase_score_upload))




		except Exception as e:
			print (e) 
		return HttpResponse(json.dumps({'Status':'Ok'}),content_type="application/json" )