from django.db import models
from django.contrib.auth.models import User

class User_Profile(models.Model):
    user = models.OneToOneField(User)
    #picture = models.ImageField(upload_to='profile_images', null=True)
    registered_type = models.IntegerField(default=0) # 0 or 1, from Social Site or Regular Sign up

    class Meta:
        abstract = True


class Student(User_Profile):
    age = models.IntegerField(default=0)
    overall_score = models.IntegerField(default=0)
    #exam_groups = models.ManyToManyField(Exam_Group, related_name ="Exam_Groupwise_Students", null = False, default = 1)
    #classes_associated = models.ManyToManyField(Class,related_name= "Classwise_Students")
    #organization_associated = models.ForeignKey(Organization, related_name = "Organizationwise_Students", default= None, null = True)
    #branch_associated = models.ForeignKey(Branch, related_name="Branchwise_Students", default= None, null = True)
    
    # def get_organization_associated(self):
    #     if (self.organization_associated):
    #         return '%s'%(self.organization_associated.name)
    #     else:
    #         return 'Not Applicable'

    # def get_branch_associated(self):
    #     if (self.branch_associated):
    #         return '%s'%(self.branch_associated.name)
    #     else:
    #         return 'Not Applicable'



class Teacher(User_Profile):
    experience = models.IntegerField(default=0)

#     classes_associated = models.ManyToManyField(Class,related_name= "Classwise_Teachers", default= None)
#     organization_associated = models.ForeignKey(Organization, related_name = "Organizationwise_Teachers", default= None,  null = True)
#     branch_associated = models.ForeignKey(Branch, related_name="Branchwise_Teachers", default= None, null = True)

#     def get_organization_associated(self):
#         if (self.organization_associated):
#             return '%s'%(self.organization_associated.name)
#         else:
#             return 'Not Applicable'

#     def get_branch_associated(self):
#         if (self.branch_associated):
#             return '%s'%(self.branch_associated.name)
#         else:
#             return 'Not Applicable'

