import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from '../models/movie'

@Pipe({
    name: 'FilterByNamePipe'
})
export class FilterByNamePipe implements PipeTransform{
    transform(movies: Movie[], movieName :string){
        return movies.filter(movie => movie.title.includes(movieName))
    }

}