#special django packages
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

#link with app forms
from .forms import FacebookUserForm, FacebookProfileForm


from django.contrib.auth.models import User

#miscaleneous packages
import re
import random

#authentication 
from django.contrib.auth import authenticate, login, logout



# Create your views here.


def login_user(request):
	if request.method == 'GET':
		print ('im here')

		return render(request, "authapp/login_user.html")
	if request.method == "POST":
		print ('ive been posted')
		first_name = request.POST.get('first_name')
		last_name = request.POST.get('last_name')
		username = request.POST.get('username')
		birthday =  "undefined"
		print (first_name, last_name, username)

		facebook_user = FacebookUserForm(data=request.POST)
		facebook_profile = FacebookProfileForm()

		has_account = authenticate(username = username)
		print (has_account)

		if has_account:
			print ('this has account')
			login(request, has_account)
			return HttpResponseRedirect('/home/')
		else:

			id_ = request.POST.get('username')
			webpull = request.POST.get('webpull')

			if birthday == "undefined":
				print ('im emplty')	
				birthday = random.randint(1993,1998)
			else:
				birthday = re.findall(r"[0-9][0-9][0-9][0-9]$", birthday)[0]

			print (id_, birthday, webpull)

			print (facebook_user)

			user = facebook_user.save()
			profile = facebook_profile.save(commit = False)
			profile.user = user
			profile.webpull = webpull
			profile.id = id_

			## steal birtday fucntion from log 
			# move to new database facebook (neeed to change all artists to facebookprofile)
			profile.year_formed = birthday
			profile.save()

			##face acount email = BB
			
			

			#authenticate user. then log him in.
			#user = authenticate(username = profile.user.username)
			now_has_account = authenticate(username = username)
			login(request, now_has_account)


			#profile.save()
			return HttpResponseRedirect('/home/')



#things to do: from FB we only get name, profile picture. Create
#template for form, has gender and age, (email optional)

#static file on server

#comunication app

#