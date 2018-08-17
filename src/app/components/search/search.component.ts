import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spf: SpotifyService, private router: Router) { }

  search(termino: string) {
    // console.log(termino);
    this.loading = true;
    this.spf.searchArtist( termino )
      .subscribe( ( res: any) => {
        console.log(res);
        this.artistas = res;
        this.loading = false;
      });
  }

  verArtista( item: any) {
    console.log (item.id);
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    }
    this.router.navigate(['/artist', artistId]);
  }

}
