from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.views.generic.base import TemplateView
from django.utils.decorators import method_decorator
from django.shortcuts import render, render_to_response



class IndexView(TemplateView):
    template_name = 'index.html'

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
        return super(IndexView, self).dispatch(*args, **kwargs)

# @csrf_exempt
# def get_index(request):
#     return render_to_response('index.html')