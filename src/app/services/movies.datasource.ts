import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, concat,ReplaySubject } from "rxjs";
import { Movie } from '../models/movie';
import {tap, concatMap } from 'rxjs/operators';
 import { MoviesService } from './movies.service';

export class MoviesDataSource implements DataSource<Movie> {
    
    private moviesSubject = new ReplaySubject<Movie[]>(4);

    constructor ( private moviesService : MoviesService )
    {

    }
    getMostPopular(page: string) {
        console.log (this.moviesSubject);
        
       this.moviesService.getMostPopular(page)
       
        .subscribe(
            movies => this.moviesSubject.next(movies)
            );
            console.log ("sss " + this.moviesSubject);
    }

    connect (): Observable <Movie[]> {
        console.log ("aaaaa");
        return this.moviesSubject.asObservable();
    }

    disconnect ( collectionViewer : CollectionViewer ) : void{

    } 

}