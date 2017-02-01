from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User

class PasswordlessAuthBackend(ModelBackend):

	def authenticate(self, username = None):
		try:
			return User.objects.get(username = username)
		except:
			return None
    		
	def get_user(self, user_id):
		try:
			return User.objects.get(pk=user_id)
		except :
			return None


