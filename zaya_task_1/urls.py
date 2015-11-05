from django.conf.urls import include, url, patterns
from django.contrib import admin
from resources.api import UserResource, StudentResource, TeacherResource, AttendenceResource, PointsResource, BehaviorResource
from zaya_task_1.views import IndexView
from tastypie.api import Api 
from User_Manager.views import LoginView, RegisterView
from User_Manager import views

# register_user_resource = RegisterUserResource()
# login_user_resource = LoginUserResource()
# student_resource = StudentResource()
# teacher_resource = TeacherResource()
# attendence_resource = AttendenceResource()
# points_resource = PointsResource()
# behavior_resource = BehaviorResource()


v1_api = Api(api_name="v1")
v1_api.register(UserResource())
v1_api.register(StudentResource())
v1_api.register(TeacherResource())
v1_api.register(AttendenceResource())
v1_api.register(PointsResource())
v1_api.register(BehaviorResource())


# urlpatterns = [
#     # Examples:
#     # url(r'^$', 'task.views.home', name='home'),
#     # url(r'^blog/', include('blog.urls')),

    
#     #url(r'^api/', include(v1_api.urls)),
#     url(r'^api/v1/auth/login/', 'User_Manager.views.login', name='login'),
# ]

urlpatterns = patterns('',
    # The normal jazz here...
    #url(r'^$', 'zaya_task_1.views.home', name='home'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^.*$', IndexView.as_view(), name='index'),
    #(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(v1_api.urls)),
    #url(r'^/', 'User_Manager.views.login', name='login'),
    #url(r'^api/v1/auth/login/', LoginView.as_view(), name='login'),
    #url(r'^api/v1/auth/register/', RegisterView.as_view(), name='register'),       
)