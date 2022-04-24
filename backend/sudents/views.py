from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.viewsets import ModelViewSet
from .serializer import StudentSerializer

from .models import Student

class StudentsViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer




# # Create your views here.
# def index(request):
#     # students = Student.objects.all()
#     #
#     students = []
#     for student in Student.objects.all():
#         students.append({
#             'name': student.name,
#             'course' : student.course,
#             'rating' : student.rating,
#         })
#     #
#     # for student in Student.objects.all():
#     return JsonResponse(students, safe=False)
