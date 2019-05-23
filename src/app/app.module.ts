import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { TestService } from './test.service';
import { SearchModule } from './search/search.module';
import { OwnerComponent } from './owner/owner.component';
import { FormOwnerComponent } from './form-owner/form-owner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    FormOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    SearchModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
