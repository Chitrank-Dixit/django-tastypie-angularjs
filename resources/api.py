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
from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from tastypie.utils import trailing_slash
from tastypie.authentication import SessionAuthentication, BasicAuthentication
from tastypie.authorization import Authorization

class RegisterUserResource(ModelResource):
    class Meta:
        allowed_methods = ['post']
        object_class = User

        authentication = BasicAuthentication()
        authorization = DjangoAuthorization()

        include_resource_uri = False
        fields = ['username']

        resource_name = 'register'

    def obj_create(self, bundle, request=None, **kwargs):
        try:
            bundle = super(RegisterUserResource).obj_create(bundle, request, **kwargs)
            bundle.obj.set_password(bundle.data.get('password'))
            bundle.obj.save()
        except IntegrityError:
            raise BadRequest('User with this username already exists')
        return bundle

class UserResource(resources.ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        allowed_methods = ['post','get']
        #excludes = ['email', 'password', 'is_superuser']
        #authorization = DjangoAuthorization()
        #filtering = { "id" : ALL }
        #authentication = BasicAuthentication()
        #always_return_data = True

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/register%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('register'), name="api/v1"),
            url(r"^(?P<resource_name>%s)/login%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('login'), name="api/v1"),
            url(r'^(?P<resource_name>%s)/logout%s$' %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('logout'), name='api/v1'),
        ]

    def register(self, bundle, request=None, **kwargs):
        self.method_check(request, allowed=['post'])
        try:
            bundle = super(RegisterUserResource).obj_create(bundle, request, **kwargs)
            bundle.obj.set_password(bundle.data.get('password'))
            bundle.obj.save()
        except IntegrityError:
            raise BadRequest('User with this username already exists')
        return bundle

    def login(self, request, **kwargs):
        self.method_check(request, allowed=['post'])

        data = self.deserialize(request, request.raw_post_data, format=request.META.get('CONTENT_TYPE', 'application/json'))

        username = data.get('username', '')
        password = data.get('password', '')

        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                return self.create_response(request, {
                    'success': True
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

    def logout(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        if request.user and request.user.is_authenticated():
            logout(request)
            return self.create_response(request, { 'success': True })
        else:
            return self.create_response(request, { 'success': False }, HttpUnauthorized)


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



