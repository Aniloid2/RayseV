"""Rayse URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

from authentication.views import login_user
from homeapp.views import home
from kingapp.views import king
from homeapp.views import Modtest

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    #authentification app
    url(r'^login/$', login_user, name="login"),

    #homeapp
    url(r'^home/$', home, name="home"),

    #kingapp
    url(r'^king/$', king, name="king"),

    #test url
    url(r'^mod/$', Modtest, name="mod"),

]
