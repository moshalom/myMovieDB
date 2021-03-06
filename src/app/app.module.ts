import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FilterByNamePipe} from './pipes/filter-by-name.pipe';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieComponent,
    MovieOverviewComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports:[
    FilterByNamePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
