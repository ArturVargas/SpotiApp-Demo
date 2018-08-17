import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;

  constructor(private spf: SpotifyService, private router: ActivatedRoute) {
    this.router.params.subscribe( params => {
      console.log(params.id);
      this.getArtist( params['id']);
    });
   }

  ngOnInit() {
  }

 getArtist( id: string) {
  this.loading = true;
  this.spf.getArtist ( id ).subscribe( res => {
    console.log(res);
    this.artist = res;
    this.loading = false;
  });
 }

}
