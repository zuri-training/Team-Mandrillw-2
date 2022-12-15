from django.contrib import admin
from django.urls import path, include 
# from django.conf.urls import handler404

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("main.urls")),
    path("accounts/", include("django.contrib.auth.urls")),
    path("account/", include("allauth.urls"))

]



handler404 = 'main.views.error_404_handler'