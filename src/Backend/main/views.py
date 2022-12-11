from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth, messages



def Landing_page(request):
    return render(request, 'landingpage.html')


def Signup(request):
    if request.method == 'POST':
        firstname = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirmPassword = request.POST.get('confirmPassword')

        if password == confirmPassword:
            
            if User.objects.filter(email=email).exists():
                messages.info(request, "Email Already In Use!")
                return redirect("signup")

            elif User.objects.filter(username=username).exists():
                messages.info(request, "Username Taken!")
                return redirect("signup") 
            else:
                user = User.objects.create_user(first_name=firstname, last_name=lastName, email=email, username=username, password=password) 
                user.save()
                return redirect("/")
                
        else:
            messages.info(request, "Password Don't Match")
            return redirect("signup")

    return render(request, 'registration/sign-up.html')