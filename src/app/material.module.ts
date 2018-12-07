import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
//import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,

  

} from '@angular/material';

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule
    
    

    
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    
  ]    
})

export class MaterialModule {}