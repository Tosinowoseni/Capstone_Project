from http.client import OK
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def Beauty_list(request):


    return Response('ok')