import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
         MatToolbarModule,
         MatInputModule,
         MatProgressSpinnerModule,
         MatCardModule 
        } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule]
})
export class MaterialModule { }