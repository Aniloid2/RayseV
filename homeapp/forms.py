
from django import forms
from django.contrib.auth.models import User

from .models import Modtest

class ModtestForm(forms.ModelForm):
    class Meta:
        model = Modtest
        fields = ('nameof',)

