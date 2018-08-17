import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styles: []
})
export class PlaylistComponent {

  playlist: any = {};
  loading: boolean;

  constructor( private spf: SpotifyService, private router: ActivatedRoute) {
    this.router.params.subscribe ( params => {
      this.getPlaylist( params['id']);
    });
   }

   getPlaylist( id: string) {
    this.loading = true;
    this.spf.getPlaylist( id )
      .subscribe( playlist => {
        console.log(playlist);
        this.playlist = playlist;
        this.loading = false;
      });
  }

}
