from django.urls import path 
from . import views 

urlpatterns = [
    path("", views.index, name="index"), 
    path('accounts/signup/', views.Signup, name="signup"),
    path("about/", views.About, name="about_us"),
    path("contact/", views.Contact, name="contact_us"),
    path("faq/", views.faq, name="faq"),
    path("file/compare/", views.Compare, name="compare"),
    path("privacy/", views.privacy, name="privacy"),
    path("terms/", views.terms, name="terms"),
    path("accounts/profile/details", views.details, name="details"),
    path("accounts/profile/edit", views.edit, name="edit"),
    # path("accounts/profile/upload/", views.upload, name="upload_image")
]
