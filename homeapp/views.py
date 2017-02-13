#special django packages

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect



#models from authentification app

from authentication.models import FacebookProfile, MyUser

from django.contrib.auth import authenticate, login, logout


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


		print (user_1)
	



		return render(request, 'homeapp/homepage.html', { 'total_users' : total_users, 'user_1':user_1, 'user_2': user_2,\
			'user_3':user_3})



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




