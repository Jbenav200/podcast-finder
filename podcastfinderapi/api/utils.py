# A utilities file for our django api
import os
import base64
import requests
import json
import urllib


def get_spotify_token(client_id, client_secret):
    auth_string = client_id + ':' + client_secret
    auth_bytes = auth_string.encode('utf-8')
    auth_base64 = str(base64.b64encode(auth_bytes), 'utf-8')
    url = 'https://accounts.spotify.com/api/token/'
    headers = {
        "Authorization": "Basic " + auth_base64,
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "grant_type": "client_credentials"
    }
    result = requests.post(url, headers=headers, data=data)
    json_result = json.loads(result.content)
    print(json_result)
    token = json_result['access_token']
    return token


def get_auth_header(token):
    return {'Authorization': 'Bearer ' + token}


def search_for_podcast(token, genre):
    print(genre)
    url = 'https://api.spotify.com/v1/search?'
    headers = get_auth_header(token)
    print(headers)
    query = f'q={str(genre)}&type=show&market=GB&limit=50'
    query_url = url + query
    print(query_url)
    result = requests.get(query_url, headers=headers)
    json_result = json.loads(result.content)
    return json_result
