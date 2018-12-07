import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie';
import { logger } from '../common/logger';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: Movie;

  @Input()
  index: number;

  constructor() { }

  ngOnInit() {
    
  }

  onMovieOverViewSelect( )
  {
    console.log ("onMovieOverViewSelect - " + this.movie.title + "(" + this.index +")")
  }

}