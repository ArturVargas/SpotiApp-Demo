import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  listas: any[] = [];

  constructor( private spf: SpotifyService ) { 
    this.spf.getRockPlaylists()
      .subscribe( (res: any) => {
        console.log(res);
       this.listas = res.playlists.items;
      });
  }


}
