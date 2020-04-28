import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './components/today/today.component';
import { TotalsComponent } from './components/totals/totals.component';
import { ChartComponent } from './components/chart/chart.component';
import { TotalsChartComponent } from './components/totals-chart/totals-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    TotalsComponent,
    ChartComponent,
    TotalsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyA-tplYUJR6hdXWDG-6nTFhEM3ijDBvgZw"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
