# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('User_Manager', '0002_teacher'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='picture',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='picture',
        ),
    ]
