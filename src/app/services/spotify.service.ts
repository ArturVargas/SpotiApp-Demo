import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getRockPlaylists() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDJUoA7C6-QGgfWvRhLI09iqoVEsuh3MD0MkKO6k0ZdBxsuxIocEOIr4WkYzz7gZIeOF65Y5G9imLGc2W8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/categories/rock/playlists', {headers})
     
  }
}


