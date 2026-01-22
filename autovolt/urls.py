# from django.contrib import admin
from django.urls import path
from autovolt import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.indexMain, name='index'),
    path('about', views.About, name='about'),
    path('tips/selling', views.selling_tips, name='selling-tips'),
    path('tips/buying', views.buying_tips, name='buying-tips'),
    path('tips/exporting', views.exporting_tips, name='exporting-tips'),
    path('contact', views.contact, name='contact'),
    path('quote', views.quote, name='quote'),
    path('privacy-policy', views.privacy_policy, name='privacy-policy'),
    path('cookie-policy', views.cookie_policy, name='cookie-policy'),
    path('terms', views.terms, name='terms'),
    path('thank-you', views.thank_you, name='thank-you'),
]
