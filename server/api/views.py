from django.http import JsonRenderer

def api_home(request, *args, **kwargs):
    return JsonRenderer({"a" : 1, "b" : 2})