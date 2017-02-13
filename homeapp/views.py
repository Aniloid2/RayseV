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

		#we need to do a test to see if what is passed is profile
		#I think it is . this neasn we can call by profile.user.name
		print (user_1)
	


		#we are passing the object of eeach user . for name we need to dive ddeper
		#

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
















#now test works,
#we need:
#check login works
#create superuser
#cleardabase
#archive the mod test
#update myuser to have fistname, usernameid, lastname
#update modtestmod to FacebookProfile, double check all imports are sorted
#update the relevant forms and their dependencies
#update the view to create a new user
#branch archived on github, as authentication level 3, delete archive on master
#dpoly to heroku


###### Archive authentication lvl 3 test ######

# from authentication.models import MyUser, ModtestMod

# from django.contrib.auth import authenticate, login, logout

# from authentication.forms import ModtestForm, ModuserForm


# def Modtest(request):
# 	if request.method == "GET":
# 		print ('Arrived to distribute html')
# 		return render(request, 'homeapp/Modtest.html')

# 	if request.method == "POST":
# 		print ('recived data now comes fun part')

# 		randnameid = request.POST.get('nameof')
# 		randusername = request.POST.get("username")
# 		autname = request.POST.get("username2")

# 		print (randusername, randnameid, autname)


# 		test_user = ModuserForm(data=request.POST)

# 		if request.user.is_authenticated: # is the user loged in?
# 			print ('done')
# 			logout(request)
# 			print ('logged out')
# 			return HttpResponseRedirect('/mod')
# 		else:

# 			a = authenticate(name = autname) # is the user in the database

# 			if a: # log in the user found in the database
# 				print ('Got account')
# 				login(request, a)
# 				print ('login')

			
# 				return HttpResponseRedirect('/mod')

# 			else: #create user in database
# 				print (randusername, a)
				
# 				user = MyUser.objects.create_user(username = randusername, username2 =autname) # the two lines of god

# 				ModtestMod.objects.create(user = user, nameof = randnameid) #to get this line i cursed over 25 times

				
		
# 				nprime = ModtestMod.objects.get(nameof = randnameid)

# 				print (nprime, 'retrived name of')
# 				print (nprime.nameof, nprime.user.username, 'finaly done it?')

# 				user.save()

# 			return HttpResponseRedirect('/mod')



#now test works,
#we need:
#check login works
#archive the mod test
#update myuser to have fistname, usernameid, lastname
#update modtestmod to FacebookProfile, double check all imports are sorted
#update the relevant forms and their dependencies
#update the view to create a new user