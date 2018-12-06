import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, concat } from "rxjs";
import { Movie } from '../models/movie';
import {tap, concatMap } from 'rxjs/operators';
 import { MoviesService } from './movies.service';

export class MoviesDataSource implements DataSource<Movie> {
    
    private moviesSubject = new BehaviorSubject<Movie[]>([]);

    constructor ( private moviesService : MoviesService )
    {

    }
    getMostPopular(page: string) {
        console.log (this.moviesSubject);
       this.moviesService.getMostPopular(page).pipe(
        tap(movies=> console.log("xxx " + movies)),
        
       )
        .subscribe(
 
            movies => this.moviesSubject.next(movies)
            );
            console.log (this.moviesSubject);
    }

    connect (): Observable <Movie[]> {
        console.log ("aaaaa");
        return this.moviesSubject.asObservable();
    }

    disconnect ( collectionViewer : CollectionViewer ) : void{

    } 

}