from django.shortcuts import render

# Create your views here.


def msme_home(request):
    return render(request,'MSME_app/msme_home.html')

def msme_reg(request):
    return render(request,'MSME_app/msme_reg.html')


def msme_change(request):
    return render(request,'MSME_app/msme_change.html')


def msme_cancel(request):
    return render(request,'MSME_app/msme_cancel.html')

def msme_lost(request):
    return render(request,'MSME_app/msme_lost.html')


