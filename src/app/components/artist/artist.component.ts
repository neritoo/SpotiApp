import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtist( id:string ){
    this.loading = true;
    this.spotify.getArtist( id )
              .subscribe( artist => {
                this.artist = artist;
                this.loading = false;
                //console.log(this.artist)
              })
  }

  getTopTracks( id: string){
    this.spotify.getTopTracks(id)
              .subscribe(data => {
                this.topTracks = data;
                console.log(data);
              })
  }

}
