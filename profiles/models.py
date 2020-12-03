from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator

class Address(models.Model):
    owner = models.ForeignKey(User, related_name='profiles', on_delete=models.CASCADE, null=True)
    streetOne = models.CharField(max_length=100)
    streetTwo = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100)    
    state = models.CharField(max_length=16)    
    zipcode = models.PositiveIntegerField(primary_key=False, validators=[MaxValueValidator(99999)])


class CreditCard(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(User, related_name='cards', on_delete=models.CASCADE, null=True)
    cardno = models.PositiveIntegerField(primary_key=False, validators=[MaxValueValidator(9999999999999999)], unique=False)
    securityCode = models.PositiveIntegerField(primary_key=False, validators=[MaxValueValidator(999)])
    expmo = models.PositiveIntegerField(primary_key=False, validators=[MaxValueValidator(12)])
    expday = models.PositiveIntegerField(primary_key=False, validators=[MaxValueValidator(31)])

class Details(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(User, related_name='details', on_delete=models.CASCADE, null=True)
    nickname = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100)
    homeStreetOne = models.CharField(max_length=100)
    homeStreetTwo = models.CharField(max_length=100)
    homeCity = models.CharField(max_length=100)
    homeState = models.CharField(max_length=100)
    homeZipCode = models.PositiveIntegerField(primary_key=False, validators=[MaxValueValidator(99999)])