# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-02-16 14:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_auto_20170213_2336'),
    ]

    operations = [
        migrations.AddField(
            model_name='facebookprofile',
            name='ip',
            field=models.CharField(default='None', max_length=30),
        ),
    ]
