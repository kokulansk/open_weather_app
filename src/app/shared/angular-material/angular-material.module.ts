import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
