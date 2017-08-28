import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {LoginComponent} from "./Login/app.login.component";
import {MainComponent} from "./Main/app.main.component";
import {routing} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
      MainComponent,
      LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
