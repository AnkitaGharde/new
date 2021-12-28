from django.urls import path
from .import views

urlpatterns = [
    path('',views.home,name='home'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),

    path('about',views.about,name='about'),
    path('contact', views.contact, name='contact'),
    path('blog',views.blog, name='blog'),



   #start a business urls

    path('proprietorship',views.proprietorship,name='proprietorship'),
    path('public',views.public_ltd,name='public'),
    path('private',views.private_ltd,name='private'),
    path('partnership',views.partnership,name='partnership'),
    path('one_person',views.one_person,name='one_person'),
    path('ltd_liability',views.ltd_liability, name='ltd_liability'),


    #tax_filing urls
    path('business',views.businesstax,name='business'),
    path('esi',views.ESI,name='esi'),
    path('GST',views.GST_filing, name='gst_filing'),
    path('incometax',views.incomeTaxFiling,name='incometax'),
    path('tds_return',views.TDS_return,name='tds_return'),



    #blogs pages
    path('blog1',views.blog1, name='blog1'),
    path('blog2', views.blog2, name='blog2'),
    path('blog3', views.blog3, name='blog3'),
    path('blog4', views.blog4, name='blog4'),
    path('blog5', views.blog5, name='blog5'),
    path('blog6', views.blog6, name='blog6'),

]