# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2017-02-01 13:18
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FacebookProfile',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('year_formed', models.PositiveIntegerField(default=0)),
                ('webpull', models.CharField(max_length=1000, null=True)),
                ('score', models.PositiveIntegerField(default=0)),
                ('times_called', models.PositiveIntegerField(default=0)),
                ('level', models.FloatField(default=0)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]