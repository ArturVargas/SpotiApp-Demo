import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getRockPlaylists() {
    const headers = new HttpHeaders({
      // this token was generated with this service: https://accounts.spotify.com/api/token

      'Authorization': 'Bearer BQD_XDutGCUPyig779ABT3sNnq5XLnMDWNNbJ8XGlUdAUqylSjGFYWAHLQQEenu8K3ZCSCED1cQCwXtqQX4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/categories/rock/playlists', {headers})
      .pipe( map( data => {
        return data['playlists'].items;
      }));
  }

  searchArtist(termino: string ) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQD_XDutGCUPyig779ABT3sNnq5XLnMDWNNbJ8XGlUdAUqylSjGFYWAHLQQEenu8K3ZCSCED1cQCwXtqQX4'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    .pipe( map( data => {
      return data['artists'].items;
    }));
  }

  getPlaylist( id: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD_XDutGCUPyig779ABT3sNnq5XLnMDWNNbJ8XGlUdAUqylSjGFYWAHLQQEenu8K3ZCSCED1cQCwXtqQX4'
    });

    return this.http.get(`https://api.spotify.com/v1/users/${yourUserName}/playlists/${ id }`, {headers});
  }

  getArtist( id: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD_XDutGCUPyig779ABT3sNnq5XLnMDWNNbJ8XGlUdAUqylSjGFYWAHLQQEenu8K3ZCSCED1cQCwXtqQX4'
    });

    return this.http.get(`https://api.spotify.com/v1/artists/${ id }`, {headers});
  }




}




