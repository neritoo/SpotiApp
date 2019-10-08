import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBWSZvs0cjPDv3f2u5aBT1iOncnwBkBkuLcnHpx5MiWMPzEMIP6iEipRa3PO78nmK4SgJk87x0TOwmUgcw'
    });
    return this.http.get(url, {headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
              .pipe(map(data => data['albums'].items));

    //return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers} )
    //          .pipe(map(data => data['albums'].items));
  }

  getArtists( x:string ){
    return this.getQuery(`search?q=${x}&type=artist&limit=20`)
              .pipe(map(data => data['artists'].items));
              
    //return this.http.get(`https://api.spotify.com/v1/search?q=${x}&type=artist&limit=20`, {headers} )
    //         .pipe( map ( data => data['artists'].items));
  }

  getArtist( id: string ){
    return this.getQuery(`artists/${id}`);
              //.pipe(map(data => data[]))
  }

  getTopTracks( id: string ){
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
              .pipe(map( data => data['tracks']));
  }

}
