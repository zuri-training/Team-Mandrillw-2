from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth, messages



def index(request):
    return render(request, 'index.html')

def edit(request):
    return render(request, 'edit.html')

def About(request):
    return render(request, 'About_us.html')



def Contact(request):
    return render(request, 'Contact_us.html')

def terms(request):
    return render(request, 'terms.html')

def faq(request):
    return render(request, 'faq.html')


def Compare(request):
    return render(request, 'main_site.html')

def privacy(request):
    return render(request, 'privacy.html' )


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
                messages.info(request, "Account Created Succesfully! ")
                return redirect("login")
                
        else:
            messages.info(request, "Password Don't Match")
            return redirect("signup")

    return render(request, 'registration/sign-up.html')