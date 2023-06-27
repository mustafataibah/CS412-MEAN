import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { DisplayDataComponent } from './display-data/display-data.component';

@NgModule({
  declarations: [AppComponent, QueryFormComponent, DisplayDataComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
