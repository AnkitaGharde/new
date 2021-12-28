from django.urls import path
from .import views

urlpatterns = [
    path('',views.gst_home,name='gst_home'),
    path('change',views.gst_change,name='gst_change'),
    path('cancel',views.gst_cancel,name='gst_cancel'),
    path('reg',views.reg,name='reg'),
    path('all_services',views.all_services,name='all_services'),



    path('accounting', views.accounting, name='accounting'),
    path('Audit', views.Audit, name='Audit'),

    path('C-finance', views.C_finance, name='C_finance'),
    path('C-service',views.C_service,name='C_service'),
    path('GST',views.GST,name='GST'),
    path('income',views.income,name='income'),
    path('international',views.international,name='international'),
    path('outsourcing',views.outsourcing,name='outsourcing'),
    path('payroll',views.payroll,name='payroll'),
    path('resident',views.resident,name='resident'),
    path('tds',views.tds,name='tds'),

    ]