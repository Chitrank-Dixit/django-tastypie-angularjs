from django.contrib import admin
from models import Student, Teacher


#admin.site.register(Student)
#admin.site.register(Teacher)

class StudentAdmin(admin.ModelAdmin):
	list_display = ['age', 'overall_score']
	list_filter = ['age','overall_score']
	search_fields = ['age', 'overall_score']

admin.site.register(Student, StudentAdmin)

class TeacherAdmin(admin.ModelAdmin):
	list_display = ['experience']
	list_filter = ['experience']
	search_fields = ['experience']

admin.site.register(Teacher, TeacherAdmin)