from django.conf.urls import include, url, patterns
from django.contrib import admin
from resources.api import UserResource, StudentResource, TeacherResource, AttendenceResource, PointsResource, BehaviorResource
#from zaya_task_1.views import IndexView
from tastypie.api import Api 
from views import get_index

v1_api = Api(api_name="v1")
v1_api.register(UserResource())
v1_api.register(StudentResource())
v1_api.register(TeacherResource())
v1_api.register(AttendenceResource())
v1_api.register(PointsResource())
v1_api.register(BehaviorResource())



urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', get_index),
    url(r'^api/', include(v1_api.urls)),
    
)