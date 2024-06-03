import { Component, OnInit } from '@angular/core';
import { MoviemateService } from '../../moviemate.service';
import { Genre, Movie, NowPlayingResponse } from '../../interfaces/list.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  public newMovies: Movie[] = [];
  public genres: Genre[] =[];

  constructor( private movieMateService:MoviemateService){}

  ngOnInit(): void {
   this.movieMateService.getNowPlayingMovies()
   .subscribe( (data:NowPlayingResponse) => {
    this.newMovies = data.results;
   });

   this.movieMateService.getGenres()
   .subscribe( (data)=> {
    this.genres = data;
   });
 
  }
}
