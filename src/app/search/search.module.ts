import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormSearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormSearchComponent
  ]
})
export class SearchModule { }
