# -*- coding: utf-8 -*-
#  Copyright (c) 2021-2025 THL A29 Limited
#  #
#  This source code file is made available under MIT License
#  See LICENSE for details
#  ==============================================================================
# Generated by Django 3.1.14 on 2022-07-26 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0005_job_ext_field'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='log_url',
            field=models.TextField(blank=True, null=True, verbose_name='日志链接'),
        ),
        migrations.AlterField(
            model_name='taskprocessrelation',
            name='log_url',
            field=models.TextField(blank=True, null=True, verbose_name='日志链接'),
        ),
    ]
