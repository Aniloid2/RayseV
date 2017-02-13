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


#the folowing two need to be turned into facebookuserPo=rofile and facebookprofile form 




######ARCHIVE authentication level3 test###############
# class ModtestForm(forms.ModelForm):
# 	class Meta:
# 		model = MyUser
# 		fields = ("username","username2")

# class ModuserForm(forms.ModelForm):
# 	class Meta:
# 		model = ModtestMod
# 		fields = ("nameof",)



#######################################################



