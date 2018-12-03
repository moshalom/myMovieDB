import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {map, debounceTime } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
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

  movies$ : Observable <Movie[]>;
  constructor(private moviesServies: MoviesService) { }
  
  ngOnInit() {
    this.movies$ = this.moviesServies.getMostPopular();
    
  }

  ngAfterViewInit(){
    console.log ("ngAfterViewInit");
    fromEvent<any> (this.input.nativeElement, 'keyup')
      .pipe(
        map(event=> event.target.value),
        debounceTime(400),

      )
      .subscribe(console.log);
  }

}
