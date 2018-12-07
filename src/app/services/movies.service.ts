import { Injectable } from '@angular/core';
import { Observable ,of, concat} from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap, map, shareReplay, catchError } from 'rxjs/operators';
//import { apiCaller } from '../common/utils';

import { Movie } from '../models/movie';

import { logger,LogginLevel }  from '../common/logger';
import { ThrowStmt } from '@angular/compiler';
 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURI="https://api.themoviedb.org/3";
  api_key="3d565f32541bd5e570bada729cceb3cb";
  movies$ : Observable <Movie[]>;
  total_pages :number;
  total_results: number;
  constructor(private http: HttpClient) { }

  getMovieDetail()
  {

  }

  getMostPopular(page: string) : Observable<Movie[]>
  {
    //const popularMovies$ = apiCaller('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const apiReq = this.baseURI + '/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';
    const params= new HttpParams ()
        .set('page',page)
        .set('api_key', this.api_key);

    return this.http.get<Movie[]>(apiReq,{params})
      .pipe(
            tap(console.log),
            tap(v=> this.total_pages = v["total_pages"]),
            tap(v=> this.total_results = v["total_results"]),
            map (res => Object.values( res["results"])),
           
            //map(res=> this.total_results = res["total_results"]),
      );
  }

  searchMovie(movieName: string) : Observable<Movie>
  {
    const apiReq = this.baseURI + '/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=' + this.api_key;
    return this.http.get<Movie>(apiReq,{})
    .pipe(
          tap(()=> console.log("getMostPopular")),
          //map (res => Object.values( res["results"])),
    );
  }

  getTotalPages(): number
  {
    return this.total_pages;
  }

  getTotalResults() :number
  {
    return this.total_results;
  }


}
