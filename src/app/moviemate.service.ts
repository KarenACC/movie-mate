import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { Genre, Movie, NowPlayingResponse } from './interfaces/list.interface';
// import { Popular } from './interfaces/popular.interface';
import { MovieDetails } from './interfaces/movieDetails.interface';
import { Videos } from './interfaces/videos.interface';
import { YoutubeTrailer } from './interfaces/youtubeRsult.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviemateService {

  private api_key: string = '4d8492535f96f96255ea467690adefdd';
  private serviceURL:string = 'https://api.themoviedb.org/3';

  private api_Key_youtube:string = 'AIzaSyCFlmUTFzqVUMYZaUvFrARKEcA5SQ68XuE';
  private serviceYoutubeURL:string = 'https://www.googleapis.com/youtube/v3';

  constructor( private http:HttpClient) { }

  getNowPlayingMovies(): Observable<NowPlayingResponse>{
    const params = new HttpParams()
    .set ('api_key', this.api_key)
    .set ('language', 'es-MX')
    .set ('region', 'MX')

    const url = `${this.serviceURL}/movie/now_playing`

    return this.http.get<NowPlayingResponse>(url, {params})
  };

  getGenres(): Observable<Genre[]>{
    const params = new HttpParams()
    .set ('api_key', this.api_key)
    .set ('language', 'es-MX')
    .set ('region', 'MX');

    const url = `${this.serviceURL}/genre/movie/list`;
    return this.http.get<{ genres: Genre[] }>(url, { params })
    .pipe(
      map(response => response.genres)
    );
  };
  
  getMovieById(id:string):Observable<MovieDetails | null>{
    const params = new HttpParams()
    .set ('api_key', this.api_key)
    .set ('language', 'es-MX');

    const url = `${this.serviceURL}/movie/${id}`;
    return this.http.get<MovieDetails>(url, {params})
  }

  getMovieVideos(id:number):Observable<Videos>{
    const params = new HttpParams()
    .set ('api_key', this.api_key)
    .set ('language', 'es-MX');

    const url = `${this.serviceURL}/movie/${id}/videos`;
    return this.http.get<Videos>(url, {params})
  };


  getYoutubeTrailer(query:string):Observable<YoutubeTrailer>{
    const params = new HttpParams()
    .set('part', 'snippet')
    .set('q', `${query}trailer`)
    .set('key', this.api_Key_youtube)
    .set('type', 'video')
    .set('maxResults', '5');

    const url = `${this.serviceYoutubeURL}/search`
    return this.http.get<YoutubeTrailer>(url, {params});
  }



}
