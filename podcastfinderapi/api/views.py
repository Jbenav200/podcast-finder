import os

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import json
from dotenv import load_dotenv
from .utils import get_spotify_token, search_for_podcast
from .serializers import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404


load_dotenv()

@api_view(['POST'])
def get_podcasts(request):
    data = request.data
    apple_results = None
    spotify_results = None
    print(data)
    if data['genre'] is not None:
        genre = data['genre'].replace(" ", "")
        additional_info = f'Genre: {data["genre"]}, '
    else:
        additional_info = 'No genre was selected. '

    additional_info = additional_info + 'Providers: '

    if data['providers'] is not None:
        for provider in data['providers']:
            if provider == 'apple':
                # apple podcasts list
                # applePodcasts = get request to apple podcasts provider, itunes searching by podcast genre
                additional_info = additional_info + 'Apple'
                resp = requests.get(f'https://itunes.apple.com/search?term={genre}&media=podcast&limit=20')
                resp_data = resp.json()
                apple_results = resp_data['results']
                # print(results)
            elif provider == 'spotify':
                # spotify podcast list
                # spotifyPodcasts = get request to spotify api, returning podcasts with search term = genre

                spotify_client_id = os.getenv('SPOTIFY_CLIENT_ID')
                spotify_secret = os.getenv('SPOTIFY_CLIENT_SECRET')
                token = get_spotify_token(spotify_client_id, spotify_secret)
                spotify_results = search_for_podcast(token, genre)
                if 'Apple' in additional_info:
                    additional_info = additional_info + ', Spotify'
                else:
                    additional_info = additional_info + 'Spotify'
            else:
                additional_info = additional_info + 'No providers were selected'
    else:
        additional_info = additional_info + 'No Providers were given'

    return Response({'message': additional_info, 'appleResults': apple_results, 'spotifyResults': spotify_results})

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(raw_password=request.data['password']):
        return Response({"detail": "not found"}, status=status.HTTP_404_NOT_FOUND)
    
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({"token": token.key, "user": serializer.data })

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    