from django.contrib.auth import authenticate, logout, login
from django.contrib.auth.models import User


class AuthService(object):

    def login(self, request, username, password):

        user = authenticate(username=username, password=password)
        if user is None or not user.is_active:
            raise Exception("User or password invalid")
        login(request, user)



        return self.create_response(request, {'success': True})

    def logout(self, request):

        logout(request)

    def register(self, request, username, password, password_again):

        if password_again != password:
            raise Exception("Passwords don't match")

        user = User(username=username)
        user.set_password(password)
        print user
        try:
            user.save()
        except:
            raise Exception("Email already taken")

        

        self.login(request, username, password)

        return user