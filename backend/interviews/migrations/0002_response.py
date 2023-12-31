# Generated by Django 4.2.4 on 2023-08-18 23:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("questions", "0002_remove_question_company_remove_question_job_role_and_more"),
        ("interviews", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Response",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("answer", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                (
                    "interview",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to="interviews.interview",
                    ),
                ),
                (
                    "question",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to="questions.question",
                    ),
                ),
            ],
        ),
    ]
