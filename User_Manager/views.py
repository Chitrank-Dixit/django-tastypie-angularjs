from django.shortcuts import render
from django.views.generic import View
from resources.api import UserResource
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.views.decorators.http import require_http_methods

class LoginView(View):
    # def get(self, request, *args, **kwargs):
    #     return HttpResponse('Hello, World!')

    # def post(self, request, *args, **kwargs):
    # 	print request

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
    	return super(LoginView, self).dispatch(*args, **kwargs)

class RegisterView(View):
    # def get(self, request, *args, **kwargs):
    #     return HttpResponse('Hello, World!')

    # def post(self, request, *args, **kwargs):
    # 	print request

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
    	return super(RegisterView, self).dispatch(*args, **kwargs)

#@csrf_exempt
# @require_http_methods(["GET", "POST"])
# def login(request):
# 	if request.method == 'POST':
# 		print 'Got it right'
# 	elif request.method == 'GET':
# 		print 'Hello'
# 	data = {"msg":"success"}
# 	return JsonResponse(data)