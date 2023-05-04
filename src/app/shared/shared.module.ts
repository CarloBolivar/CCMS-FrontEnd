import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatTableModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  exports:[
    MatGridListModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatTableModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SharedModule { }
