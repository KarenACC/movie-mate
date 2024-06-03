import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importa DomSanitizer

import { MoviemateService } from '../../moviemate.service';

import { MovieDetails, Genre } from '../../interfaces/movieDetails.interface';
import { Videos } from '../../interfaces/videos.interface';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent implements OnInit{

  public movie!:MovieDetails;
  private baseImageUrl: string = 'https://image.tmdb.org/t/p/w1280';
  // private baseBgUrl: string = 'https://image.tmdb.org/t/p/original';
  // public trailerKey:string | undefined;
  public trailerKey: SafeResourceUrl | undefined;
  
  @Input()
  public genres:Genre[] =[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private moviemateService:MoviemateService,
    private sanitizer: DomSanitizer 
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( (params)=> {
      this.moviemateService.getMovieById(params['id'])
      .subscribe(movie => {
        if(!movie){
          return this.router.navigateByUrl('');
        }
        this.movie= movie;

        this.moviemateService.getMovieVideos(movie.id)
        .subscribe( (videos:Videos)=> {
          const trailer = videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
          if(trailer){
            this.trailerKey = this.getSanitizedUrl(trailer.key)
          } else {
            this.searchYoutubeTrailer(movie.title)
          }
        })
        return;
      });
    });
  }

  searchYoutubeTrailer(title:string):void{
    this.moviemateService.getYoutubeTrailer(title)
    .subscribe( (response)=> {
      const video = response.items[0];
      if(video){
        this.trailerKey = this.getSanitizedUrl(video.id.videoId)
      }
    });
  }

  getImageUrl(): string {
    return `${this.baseImageUrl}${this.movie.poster_path}`;
  };

  getBackgroundUrl():string{
    return `${this.baseImageUrl}${this.movie.backdrop_path}`
  };

  getSanitizedUrl(key: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
  }

}
