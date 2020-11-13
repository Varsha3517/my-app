import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/service/list.service';
import { List } from '../movielisting/list';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  list: List
  constructor(private listservice: ListService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.loadDetails()
  }

  loadDetails()
  {
    const imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');
    this.listservice.getDetails(imdbID).subscribe(response => {
      console.log("MOVE", response)
      this.list = response
    })
      
  }

}
