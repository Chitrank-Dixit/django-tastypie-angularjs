from django.contrib import admin

from models import Behavior, Points, Attendence

# admin.site.register(Behavior)
# admin.site.register(Points)
# admin.site.register(Attendence)

class BehaviorAdmin(admin.ModelAdmin):
	list_display = ['behavior_name', 'points']
	list_filter = ['behavior_name', 'points']
	search_fields = ['behavior_name', 'points']

admin.site.register(Behavior, BehaviorAdmin)

class PointsAdmin(admin.ModelAdmin):
	list_display = ['points']
	list_filter = ['points']
	search_fields = ['points']

admin.site.register(Points, PointsAdmin)

class AttendenceAdmin(admin.ModelAdmin):
	list_display = ['datetime']
	list_filter = ['datetime']
	search_fields = ['datetime']

admin.site.register(Attendence, AttendenceAdmin)
