from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    return render(request, "E:/ProgramsForSoftwareEngineering/Online-Book-Store/frontend/templates/frontend/base.html")