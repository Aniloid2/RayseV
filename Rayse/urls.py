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


#for static files
from django.conf import settings
from django.conf.urls.static import static

from authentication.views import Register_login, logoutZ, extra_details
from homeapp.views import home, get_users
from kingapp.views import king
#from homeapp.views import Modtest

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    #authentification app
    url(r'^login/$', Register_login, name="login"),
    
    url(r'^extra_details/$', extra_details, name="extra_details"),


    #homeapp
    url(r'^home/$', home, name="home"),

    url(r'^get_users/$', get_users, name="get_users"),

    #kingapp
    url(r'^king/$', king, name="king"),

    url(r'^logout/$', logoutZ, name = "logoutZ"),

    #test url#####ARCHIVE####
    
    #url(r'^mod/$', Modtest, name="mod"),

]


# ## local static ## 
# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)