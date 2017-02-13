from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User

#from homeapp.models import Modtest

from authentication.models import MyUser

## good examples but can go ##
class PasswordlessAuthBackend(ModelBackend):

	def authenticate(self, username = None):
		try:
			print ('im this ones')
			return User.objects.get(username = username)
		except:
			return None
    		
	def get_user(self, user_id):
		try:
			return User.objects.get(pk=user_id)
		except :
			return None


class Anotherpasslessauth(ModelBackend):
	def authenticate(self, name = None):
		print ('im in')

		try:
			return Modtest.objects.get(nameof = name)
		except:
			return None

class ClanModtest(ModelBackend):
	def authenticate(self, name=None):
		print ('authenticating....')
		try :
			return MyUser.objects.get(username_id = name)
		except Exception as e:
			print (e)
			return None