from django.shortcuts import render,redirect
from CA_app.models import candidate,Contact

from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth import login
# Create your views here.
def home(request):
    return render(request,'CA_app/home.html')

#
def signup(request):

    if request.method=="POST":
        Firstname=request.POST['Firstname']
        Lastname=request.POST['Lastname']
        email = request.POST['email']

        mobile = request.POST['mobile']
        password = request.POST['password']
        candidate(Firstname=Firstname,Lastname=Lastname,email=email,mobile=mobile,password=password).save()



        messages.success(request,'The new user' +request.POST['Firstname']+"is  saved Successfully.... ")
        return render(request,'CA_app/home.html')
    else:
        return render(request,'CA_app/signup_login/signup.html')


def login(request):
    if request.method=="POST":
        try:
            Userdetails=candidate.objects.get(email=request.POST['email'],password=request.POST['password'])
            print("Firstname=",Userdetails)
            request.session['email']=Userdetails.email
            return render(request,'CA_app/Home.html')
        except candidate.DoesNotExist as e:
             messages.success(request,'Firstname/ password Invalid..')


    return render(request,'CA_app/signup_login/login.html')





def about(request):
    return render(request,'CA_app/about.html')


def blog(request):
    return render(request,'CA_app/blog.html')




def contact(request):
    if  request.method=="POST":
        Your_Name=request.POST.get('Your_Name')
        Your_Email=request.POST.get('Your_Email')
        Your_Subject=request.POST.get('Your_Subject')
        Your_Message=request.POST.get('Your_Message')
        Contact(Your_Name=Your_Name,Your_Email=Your_Email,Your_Subject=Your_Subject,Your_Message=Your_Message).save()

        return render(request, 'CA_app/home.html')
    else:
        return render(request, 'CA_app/contact.html')

#
# start a business

def proprietorship(request):
    return render(request,'CA_app/proprietorship.html')


def partnership(request):
    return render(request,'CA_app/partnership.html')


def public_ltd(request):
    return render(request,'CA_app/public_ltd_company.html')


def private_ltd(request):
    return render(request,'CA_app/private_ltd_company.html')

def one_person(request):
    return render(request,'CA_app/one_person_company.html')

def ltd_liability(request):
    return render(request,'CA_app/ltd_liability_partnership.html')



#tax-filing

def businesstax(request):
    return render(request,'CA_app/Tax_filing/businessTaxFiling.html')


def ESI(request):
    return render(request,'CA_app/Tax_filing/ESI_Return.html')



def GST_filing(request):
    return render(request,'CA_app/Tax_filing/GST_Filing.html')


def incomeTaxFiling(request):
    return render(request,'CA_app/Tax_filing/incomeTaxFiling.html')


def TDS_return(request):
    return render(request,'CA_app/Tax_filing/TDS_Return.html')



#blogs pages views

def blog1(request):
    return render(request,'CA_app/blogs/blog1.html')

def blog2(request):
    return render(request,'CA_app/blogs/blog2.html')

def blog3(request):
    return render(request,'CA_app/blogs/blog3.html')

def blog4(request):
    return render(request,'CA_app/blogs/blog4.html')

def blog5(request):
    return render(request,'CA_app/blogs/blog5.html')

def blog6(request):
    return render(request,'CA_app/blogs/blog6.html')
