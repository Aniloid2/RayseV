"""
Django settings for Rayse project.

Generated by 'django-admin startproject' using Django 1.10.2.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.10/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

print ('path base',BASE_DIR)
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'm(g=-7__2jvuxkpw(^z3*x-o&n%-des*bet-1%u#rg3mdob9%7'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
Production = True

ALLOWED_HOSTS = ['rayse.com', 'rayse.herokuapp.com']


# Application definition

INSTALLED_APPS = [
    'authentication.apps.AuthenticationConfig',
    'homeapp.apps.HomeappConfig',
    'kingapp.apps.KingappConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'storages',
    'webpack_loader',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'Rayse.urls'


PARENT_HOST ="rayse.herokuapp.com"

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Rayse.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases
# posgress psycopg2==2.6.2
# mysql-python MySQL-python==1.2.5
# mysqlclient mysqlclient==1.3.9

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'raysev5', # 'acsm_a93082fed4c4e25',
        'USER': 'b21b9366dc3ea7', # 'b987b1989db102',
        'PASSWORD': 'dfad941d', # '16bc1066',
        'HOST': 'eu-cdbr-azure-north-e.cloudapp.net',
        'PORT': '3306'
    }
}

#Database=acsm_a93082fed4c4e25;Data Source=eu-cdbr-azure-north-e.cloudapp.net;User Id=b987b1989db102;Password=16bc1066


# Update database configuration with $DATABASE_URL.

# import dj_database_url
# db_from_env = dj_database_url.config()
# DATABASES['default'].update(db_from_env)


# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

#STATIC_URL = '/static/'


AUTHENTICATION_BACKENDS = (

    'django.contrib.auth.backends.ModelBackend',
    'authentication.auth_backend.ClanModtest',
)


AUTH_USER_MODEL = 'authentication.MyUser'

# Set to true to switch to aws static deplyent. 
# Run collectstatic to dump all static files on aws s3


if Production == True:
    AWS_STORAGE_BUCKET_NAME = 's3raysev'
    #AWS_ACCESS_KEY_ID = ''
    #AWS_SECRET_ACCESS_KEY = ''

    # Tell django-storages that when coming up with the URL for an item in S3 storage, keep
    # it simple - just use this domain plus the path. (If this isn't set, things get complicated).
    # This controls how the `static` template tag from `staticfiles` gets expanded, if you're using it.
    # We also use it in the next setting.


    AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME

    # This is used by the `static` template tag from `static`, if you're using that. Or if anything else
    # refers directly to STATIC_URL. So it's safest to always set it.

    STATIC_URL = "https://%s/" % AWS_S3_CUSTOM_DOMAIN

# Tell the staticfiles app to use S3Boto storage when writing the collected static files (when
# you run `collectstatic`).

    STATICFILES_STORAGE = 'storages.backends.s3boto.S3BotoStorage'

