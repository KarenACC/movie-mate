import { Component, Input } from '@angular/core';
import { Genre, Movie } from '../../interfaces/list.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {

  @Input()
  public movie!:Movie;

  @Input()
  public genres!:Genre[];

  private baseImageUrl: string = 'https://image.tmdb.org/t/p/w500';

  getGenreNames(): string[] {
    return this.genres
      .filter(genre => this.movie.genre_ids.includes(genre.id))
      .map(genre => genre.name);
  }

  getImageUrl(): string {
    return `${this.baseImageUrl}${this.movie.poster_path}`;
  }

}
