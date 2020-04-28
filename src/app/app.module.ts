import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldwideTodayComponent } from './components/worldwide-today/worldwide-today.component';
import { TotalsComponent } from './components/totals/totals.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldwideTodayComponent,
    TotalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
