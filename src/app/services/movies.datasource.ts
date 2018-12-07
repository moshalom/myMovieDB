import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, concat,ReplaySubject } from "rxjs";
import { Movie } from '../models/movie';
import {tap, concatMap } from 'rxjs/operators';
 import { MoviesService } from './movies.service';

export class MoviesDataSource implements DataSource<Movie> {
    
    private moviesSubject = new BehaviorSubject<Movie[]>([]);

    constructor ( private moviesService : MoviesService )
    {

    }
    getMostPopular(page: string) {
        
        let latstList: Movie[] = this.moviesSubject.getValue();
        this.moviesService.getMostPopular(page)
        .subscribe(
            movies => this.moviesSubject.next(latstList.concat(movies))
            );
            console.log (this.moviesSubject);
    }

    connect (): Observable <Movie[]> {
        return this.moviesSubject.asObservable();
    }

    disconnect ( collectionViewer : CollectionViewer ) : void{

    } 

}