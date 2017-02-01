from django import forms
from django.contrib.auth.models import User

from .models import FacebookProfile


#facebook api linkage
class FacebookUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name',)


class FacebookProfileForm(forms.ModelForm):
    class Meta:
        model = FacebookProfile
        fields = ('id', 'year_formed', 'webpull',)