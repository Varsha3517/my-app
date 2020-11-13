import { Component, OnInit } from '@angular/core';
import { Movies} from './movie'
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  movie: Movies = {
    id: "",
    m_name: "",
    m_year: "",
    m_star: "",
    m_rating: "",
    m_imageUrl: "",
    m_trailer: ""
  }

  movielist: Movies[];


  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.loadAllMovies();
  }

  loadAllMovies(): void
  {
    this.movielist = this.movieservice.getAllMovies();
  }

  save()
  {
    this.movielist.unshift(this.movie)
  }

}
