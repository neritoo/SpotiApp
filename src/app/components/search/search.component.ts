import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  artist: boolean;
  loading: boolean;

  constructor( private spotify: SpotifyService) {  }

  ngOnInit(){
    this.isArtist();
  }

  buscar( x: string ){
    this.loading = true;
    this.spotify.getArtists(x).subscribe(data => {
      this.artistas = data;
      this.loading = false;
    })
  }

  isArtist(){
    if(this.artistas.length = 0){
      this.artist = false;
    }
    else {
      this.artist = true;
    }
  }
}
