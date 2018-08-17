import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  listas: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage = '';

  constructor( private spf: SpotifyService, private router: Router ) {
    this.loading = true;
    this.spf.getRockPlaylists()
      .subscribe( (res: any) => {
        console.log(res);
       this.listas = res;
       this.loading = false;
      }, ( err ) => {
        this.loading = false;
        this.error = true;
        console.log(err.error.error);
        this.errorMessage = err.error.error.message;
      });
  }

  verPlaylist( item: any) {
    let listId;
    if ( item.type === 'playlist') {
      listId = item.id;
      console.log(listId);
    }
    this.router.navigate(['/playlist', listId]);

  }


}
