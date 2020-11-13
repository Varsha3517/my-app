import { Component, OnInit } from '@angular/core';
import { get } from 'http';
import { ListService } from 'src/app/service/list.service';
import { List } from './list';

@Component({
  selector: 'app-movielisting',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.scss']
})
export class MovielistingComponent implements OnInit {

  movie_list: List[];

  constructor(private listservice: ListService) { }

  ngOnInit(): void {
    this.loadMovieList()
  }

  loadMovieList(): void {
    this.listservice.getMovieList().subscribe(response => {
      console.log("RESPONSE", response)
      this.movie_list = response.Search;
    })

  }
}
