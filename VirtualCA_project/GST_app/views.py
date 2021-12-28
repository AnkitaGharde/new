from django.shortcuts import render

# Create your views here.

def gst_home(request):
    return render(request,'GST_app/gst_home.html')

def gst_change(request):
    return render(request,'GST_app/gst_change.html')

def gst_cancel(request):
    return render(request,'GST_app/gst_cancel.html')

def reg(request):
    return render(request,'GST_app/gst_registration.html')



#all services
def all_services(request):
    return render(request,'GST_app/service/All_Services/all_services.html')




def accounting(request):
    return render(request,'GST_app/service/Accounting.html')


def Audit(request):
    return render(request,'GST_app/service/Audit.html')


def C_finance(request):
    return render(request,'GST_app/service/Corporate_Finance.html')


def C_service(request):
    return render(request,'GST_app/service/Corporate_Services.html')


def GST(request):
    return render(request,'GST_app/service/GST.html')


def income(request):
    return render(request,'GST_app/service/Income_Tax.html')


def international(request):
    return render(request,'GST_app/service/international_Services.html')


def outsourcing(request):
    return render(request,'GST_app/service/Outsourcing.html')


def payroll(request):
    return render(request,'GST_app/service/payroll.html')


def resident(request):
    return render(request,'GST_app/service/Service_Non_Resident.html')


def tds(request):
    return render(request,'GST_app/service/TDS.html')

