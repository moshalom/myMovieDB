import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {map, debounceTime, distinctUntilChanged,tap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { MoviesDataSource } from '../services/movies.datasource'
import { Movie } from '../models/movie';

import {PageEvent} from '@angular/material';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, AfterViewInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  @Input()
    movie: Movie;

  @ViewChild('searchInput') input: ElementRef;
  
  page: number;
  movies$ : Observable <Movie[]>;
  dataSource: MoviesDataSource;

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    //In chrome and some browser scroll is given to body tag
    let min = document.documentElement.scrollTop + document.documentElement.clientHeight +1  ;
    let atBottom = min >= document.documentElement.offsetHeight
    console.log ("min = " + min + ", d= " + document.documentElement.offsetHeight);
     if(atBottom)   {
      console.log("End Of Page");
      this.page++; 
      this.dataSource.getMostPopular(this.page.toString());
      document.documentElement.scrollTop = min;
     }
  }
 

  constructor(private moviesServies: MoviesService) { }
  
  ngOnInit() {
    this.page =1;
    this.dataSource = new MoviesDataSource(this.moviesServies);
    this.dataSource.getMostPopular(this.page.toString());
    this.movies$ = this.dataSource.connect();
    this.setPageSizeOptions("5, 10, 25, 100");
  }

  ngAfterViewInit(){
    
    fromEvent<any> (this.input.nativeElement, 'keyup')
      .pipe(
        map(event=> event.target.value),
        debounceTime(400),
        distinctUntilChanged()

      )
      .subscribe();
      
  }

  loadMore()
  {
    this.page++; 
    console.log ("load more " + this.page);
      //this.dataSource.getMostPopular(this.page.toString());
      this.dataSource.getMostPopular(this.page.toString());
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    //this.length = parseInt(this.moviesServies.getTotalPages)
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }



}
