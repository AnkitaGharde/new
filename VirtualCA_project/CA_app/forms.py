from django.forms import forms
from .models import candidate,Contact


class signup(forms.Form):
    password = forms.CharField(widget=forms.PasswordInput)
    class meta:
        models=candidate
        fields =['Firstname', 'Lastname', 'email', 'mobile', 'password']




class contactform(forms.Form):
    class meta:
        models=Contacts
        fields=[' Your_Name','Your_Email',' Your_Subject','Your_Message']
widgets={
            'Your_Name':forms.TextInput(attrs={'class':'form-control' }),
            'Your_Email ': forms.EmailInput(attrs={'class': 'form-control'}),
            'Your_Subject': forms.TextInput(attrs={'class':'form-control' }),
            'Your_Message':forms.TextInput(attrs={'class':'form-control' }),
        }