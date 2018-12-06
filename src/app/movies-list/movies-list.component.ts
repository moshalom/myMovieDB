import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {map, debounceTime, distinctUntilChanged,tap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { MoviesDataSource } from '../services/movies.datasource'
import { Movie } from '../models/movie';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, AfterViewInit {
  @Input()
    movie: Movie;

  @ViewChild('searchInput') input: ElementRef;
  
  page: number;
  movies$ : Observable <Movie[]>;
  dataSource: MoviesDataSource;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let min = document.documentElement.scrollTop + document.documentElement.clientHeight +1  ;
    let atBottom = min >= document.documentElement.offsetHeight
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
    //this.movies$ = this.moviesServies.getMostPopular(this.page.toString());
    this.dataSource = new MoviesDataSource(this.moviesServies);
    this.dataSource.getMostPopular(this.page.toString());
    this.movies$ = this.dataSource.connect();
 /*this.movies$.pipe
   tap(() => this.dataSource.getMostPopular(this.page.toString()))
   ).subscribe();*/
 //this.movies$ = this.moviesServies.getMostPopular(this.page.toString());
 //this.movies$.subscribe();
    //this.movies_temp$ = this.movies$;

    
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

  



}
