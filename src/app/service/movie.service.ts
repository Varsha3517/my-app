import { Injectable } from '@angular/core';
import { MOVIES } from '../components/movielist/list-movies';
import { Movies } from '../components/movielist/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor() { }

  getAllMovies(): Movies[] {
    return MOVIES;
  }

  getMovie(id: string): Movies {
    return MOVIES.find(movie => movie.id === id)
  }
}
