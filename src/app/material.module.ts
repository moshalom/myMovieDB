import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatExpansionModule
  
} from '@angular/material';

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule
    
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule
  ]    
})

export class MaterialModule {}