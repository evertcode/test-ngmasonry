import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgMasonryModule } from 'ng-masonry';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgMasonryModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
