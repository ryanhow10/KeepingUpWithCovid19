import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './components/today/today.component';
import { TotalsComponent } from './components/totals/totals.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    TotalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
