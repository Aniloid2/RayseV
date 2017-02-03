from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

#special django packages
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect


#models from authentification app
from authentication.models import FacebookProfile


#miscaleneous packages
import re
import random


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

		#we need to do a test to see if what is passed is profile
		#I think it is . this neasn we can call by profile.user.name
		print (user_1)
	


		#we are passing the object of eeach user . for name we need to dive ddeper
		#

		return render(request, 'homeapp/homepage.html', { 'total_users' : total_users, 'user_1':user_1, 'user_2': user_2,\
			'user_3':user_3})



	if request.method == "POST":
	
		user_1 = request.POST.get('user_1')
		user_2 = request.POST.get('user_2')
		user_3 = request.POST.get('user_3')
		left_most_liked = [user_1, user_2, user_3]

		score = 3
		for item in left_most_liked:
			user =  FacebookProfile.objects.get(pk = item)
			user.score += score
			score -= 1
			user.times_called +=1
			user.level = float(user.score)/float(user.times_called)
			print (user.user.username, user.score, user.times_called, user.level)
			user.save()

		return HttpResponseRedirect('/home/')
