from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth, messages

from django.core.mail import send_mail 
from django.conf import settings 
from django.contrib.auth.decorators import login_required



def index(request):
    return render(request, 'index.html')

@login_required(login_url='login')
def details(request):
    return render(request, 'profile.html')

def About(request):
    return render(request, 'About_us.html')

@login_required(login_url='login')
def edit(request):
    return render(request, 'edit_profile.html')

def Contact(request):
    return render(request, 'Contact_us.html')

def terms(request):
    return render(request, 'terms.html')

def faq(request):
    return render(request, 'faq.html')

@login_required(login_url='login')
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

                subject = 'Welcome to Team Mandrillw2 Final Project!'
                message = f'Hi {firstname}, Thanks for joining Us!'
                from_email = settings.EMAIL_HOST_USER
                recipient_list = [email]
                send_mail(subject, message, from_email, recipient_list, fail_silently=False)
                messages.info(request, "Account Created Succesfully! ")
                return redirect("login")
                
        else:
            messages.info(request, "Password Don't Match")
            return redirect("signup")

    return render(request, 'registration/sign-up.html')



def error_404_handler(request, exception):
    return render(request, '404.html')
