import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatInputModule
    
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatInputModule
  ]    
})

export class MaterialModule {}