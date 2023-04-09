from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    # id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=255)
    email=models.CharField(max_length=255,unique=True)
    password=models.CharField(max_length=255)
    about=models.CharField(max_length=255)
    
    username=None
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]
class quotes(models.Model):
    userid=models.ForeignKey(User,on_delete=models.CASCADE)
    quote=models.CharField(max_length=255)
    category=models.CharField(max_length=255)
    
    
    