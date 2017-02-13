from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group



from authentication.models import MyUser, FacebookProfile


#facebook api linkage

class FacebookUserForm(forms.ModelForm):
    class Meta:
        model = MyUser
        fields = ('username_id', 'first_name', 'last_name',)


class FacebookProfileForm(forms.ModelForm):
    class Meta:
        model = FacebookProfile
        fields = ('webpull',)

