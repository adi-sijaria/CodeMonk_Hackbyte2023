from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer,profileSerializer,quoteSerializer,quoteshowSerializer
from rest_framework.response import Response
from .models import User,quotes
from rest_framework.exceptions import AuthenticationFailed
import jwt,datetime
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class RegisterView(APIView):
    def post(self,request):
        serializer=UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
class LoginView(APIView):
    def post(self,request):
        email=request.data['email']
        password=request.data['password']
        print(1)
        user=User.objects.filter(email=email).first()
        print(user)
        if user is None:
            raise AuthenticationFailed("user not found")
        if not user.check_password(password):
            raise AuthenticationFailed('incorrect password')
        payload={
            'id':user.id,
            'exp':datetime.datetime.utcnow()+datetime.timedelta(minutes=60),
            'iat':datetime.datetime.utcnow()
        }
    #    set token in http only cookie
        token=jwt.encode(payload,'secret',algorithm='HS256')
        response=Response()
        response.set_cookie(key='jwt',value=token,httponly=True)
        response.data={
            'jwt':token
        }
        return response
class UserView(APIView):
  #  permission_classes = [IsAuthenticated]
    def get(self,request):
       
        print(request)
        token= request.COOKIES.get('jwt')
        print(request.COOKIES)
        if not token:
             
            raise AuthenticationFailed('unaunthenticated')
        try:
            payload =jwt.decode(token,'secret',algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("unauthorised")
        user=User.objects.filter(id=payload['id']).first()
        serializer=UserSerializer(user)
        return Response(serializer.data)
class LogoutView(APIView):
    def post(self,request):
        response=Response()
        response.delete_cookie('jwt')
        response.data={
            'message':'sucess'
        }
        return response
class GetProfile(APIView):
    # permission_classes = [IsAuthenticated]
    
    def get(self, request):
        items=User.objects.all()
        serializer=profileSerializer(items,many=True)
        return Response(serializer.data)
class Kickposting(APIView):
    def post(self,request):
        
        serializer= quoteSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
class Fetchkicks(APIView):
    # permission_classes = [IsAuthenticated]
    
    def get(self, request):
        items=quotes.objects.all()
       
        serializer=quoteshowSerializer(items,many=True)
        print(serializer,"hi")
        return Response(serializer.data)
class Fetchuserhistory(APIView):
    # permission_classes = [IsAuthenticated]
    
    def get(self, request,pk):
        items=quotes.objects.filter(userid=pk)
       
        serializer=quoteshowSerializer(items,many=True)
        print(serializer,"hi")
        return Response(serializer.data)