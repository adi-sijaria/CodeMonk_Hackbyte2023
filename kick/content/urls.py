"""kick URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include,re_path as url
from content import views
urlpatterns = [
       url(r'^register$',views.RegisterView.as_view(),name='RegisterView'),
        url(r'^login$',views.LoginView.as_view(),name='loginview'),
        url(r'^getallprofile$',views.GetProfile.as_view(),name='allprofile'),
    url(r'^userview$',views.UserView.as_view(),name="user"),
    url(r'^logout$',views.LogoutView.as_view(),name="LOGOUT"),
    url(r'^kickposting$',views.Kickposting.as_view(),name="kickposting"),
     url(r'^fetchkicks$',views.Fetchkicks.as_view(),name="kickposting"),
     path('fetchuserhistory/<str:pk>/',views.Fetchuserhistory.as_view(),name='delete student'),
      path('userupdate/<str:pk>/',views.UserUpdate.as_view(),name='Userupdate')
]
