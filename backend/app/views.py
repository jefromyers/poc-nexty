from random import randint

from django.http import JsonResponse


def index(request):
    num = randint(1, 100)
    data = {"num": num}
    resp = JsonResponse(data, safe=False)
    resp["Access-Control-Allow-Origin"] = "*"
    return resp
