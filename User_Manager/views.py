from django.shortcuts import render
from django.views.generic import View
from resources.api import UserResource
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.views.decorators.http import require_http_methods

class LoginView(View):
    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
    	return super(LoginView, self).dispatch(*args, **kwargs)

class RegisterView(View):
    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
    	return super(RegisterView, self).dispatch(*args, **kwargs)

