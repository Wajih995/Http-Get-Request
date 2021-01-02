import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {CovidService} from './covid.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
