import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiKey = 'apikey=c476bfc1';
  baseUrl = 'http://www.omdbapi.com/';

  constructor(private httpclient: HttpClient) { }

  getMovieList(): Observable<any> {
    const url = `${this.baseUrl}?s=black&${this.apiKey}`  // http://www.omdbapi.com/?s=john&page=1&apikey=c476bfc1;
    return this.httpclient.get(url)
  }

  getDetails(imdbID): Observable<any> {
    const url = `${this.baseUrl}?i=${imdbID}&${this.apiKey}`
    return this.httpclient.get(url)
  }
}
