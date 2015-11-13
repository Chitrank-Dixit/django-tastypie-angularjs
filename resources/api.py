from tastypie.authorization import Authorization
from tastypie.authentication import Authentication
#from tastypie.resources import ModelResource
from tastypie import resources
from User_Manager.models import Student, Teacher
from Class_Manager.models import Attendence, Points, Behavior
from django.contrib.auth.models import User
from django import http
from django.db import IntegrityError, transaction
from django.contrib.auth import authenticate, login, logout
from django.conf.urls import url
from django.core.urlresolvers import reverse
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from tastypie.http import HttpUnauthorized, HttpForbidden
from tastypie import fields
from tastypie.authorization import DjangoAuthorization
from tastypie.utils import trailing_slash
from tastypie.authentication import SessionAuthentication, BasicAuthentication
from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from auth import BasicSessionAuthentication, UserAuthorization
from tastypie.authorization import Authorization
from tastypie import fields
from django.conf.urls import url
from services import AuthService

class BaseApiResource(ModelResource):

    def response_success(self, request, data=None):

        response = {"success": True}
        if data is not None:
            response.update(data)

        return self.create_response(request, response)

    def response_failure(self, request, message):

        response = {"success": False, "message": message}
        return self.create_response(request, response)


class UserResource(BaseApiResource):

    service = AuthService()

    class Meta:
        queryset = User.objects.all()
        resource_name = "user"
        authorization = Authorization()
        authentication = Authentication()
        always_return_data = True
        allowed_methods = ['post','get']

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/login/$" % (self._meta.resource_name, ), self.wrap_view('login'), name="api_login"),
            url(r"^(?P<resource_name>%s)/logout/$" % (self._meta.resource_name, ), self.wrap_view('logout'), name="api_logout"),
            url(r"^(?P<resource_name>%s)/register/$" % (self._meta.resource_name, ), self.wrap_view('register'), name="api_register"),
            url(r"^(?P<resource_name>%s)/is_logged_in/$" % (self._meta.resource_name, ), self.wrap_view('is_logged_in'), name="api_is_logged_in"),
        ]

    def login(self, request, **kwargs):
        
        self.method_check(request, allowed=['post'])

        print request.POST.get('username','')
        data = self.deserialize(request, request.body, format=request.META.get('CONTENT_TYPE', 'application/json'))

        username = data.get('username', '')
        password = data.get('password', '')
        print username, password
        #username = request.POST.get('username','')
        #password = request.POST.get('password','')

        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                print user
                return self.create_response(request, {
                    'success': True,
                    'data': { 'id': user.id, 'username': user.username }
                })
            else:
                return self.create_response(request, {
                    'success': False,
                    'reason': 'disabled',
                    }, HttpForbidden )
        else:
            return self.create_response(request, {
                'success': False,
                'reason': 'incorrect',
                }, HttpUnauthorized )

    def is_logged_in(self, request, **kwargs):

        return self.create_response(request, request.user.is_authenticated())

    def logout(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        logout(request)
        return self.response_success(request)

    def register(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        username = request.POST.get("username",'')
        password = request.POST.get("password", '')
        password_again = request.POST.get("password_again", '')

        try:
            #user = self.service.register(request, username, password, password_again)
            if password_again != password:
                raise Exception("Passwords don't match")

            user = User(username=username)
            user.set_password(password)
            print user
            try:
                user.save()
            except:
                raise Exception("Email already taken")

        

            self.login(request)
            return self.response_success(request, data={"id": user.id})
        except Exception, e:
            return self.response_failure(request, str(e))


class StudentResource(ModelResource):
    class Meta:
        queryset = Student.objects.all()
        resource_name = 'student'
        allowed_methods = ['post', 'get', 'patch', 'delete']
        authentication = Authentication()
        authorization = Authorization()
        always_return_data = True

class TeacherResource(ModelResource):
    class Meta:
        queryset = Teacher.objects.all()
        resource_name = 'teacher'
        allowed_methods = ['post', 'get', 'patch', 'delete']
        authentication = Authentication()
        authorization = Authorization()
        always_return_data = True

class AttendenceResource(ModelResource):
    class Meta:
        queryset = Attendence.objects.all()
        resource_name = 'attendence'
        allowed_methods = ['post', 'get', 'patch', 'delete']
        authentication = Authentication()
        authorization = Authorization()
        always_return_data = True

class PointsResource(ModelResource):
    class Meta:
        queryset = Points.objects.all()
        resource_name = 'points'
        allowed_methods = ['post', 'get', 'patch', 'delete']
        authentication = Authentication()
        authorization = Authorization()
        always_return_data = True

class BehaviorResource(ModelResource):
    class Meta:
        queryset = Behavior.objects.all()
        resource_name = 'behavior'
        allowed_methods = ['post', 'get', 'patch', 'delete']
        authentication = Authentication()
        authorization = Authorization()
        always_return_data = True



