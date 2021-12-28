from django.urls import path
from .import views

urlpatterns = [
    path('',views.msme_home,name='msme_home'),
    path('msme_reg',views.msme_reg,name='msme_reg'),
    path('msme_change',views.msme_change,name='msme_change'),
    path('msme_cancel',views.msme_cancel,name='msme_cancel'),
    path('msme_lost',views.msme_lost, name='msme_lost'),

    ]