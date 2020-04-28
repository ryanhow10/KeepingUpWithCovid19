import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { TodayService } from './services/today.service';
import { Country } from './models/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  today:Date = new Date();
  countries:Country[];
  countryName:string;
  countryCode:string;
  locationChosen:boolean = false;
  latitude:number = 43.651070;
  longitude:number = -79.347015;
  labels:string[] = ["Confirmed", "Recovered", "Deaths"];
  countryTodayData:number[] = [];
  countryTotalData:number[] = [];
  dailyCountryTotals:string = "Daily Totals";
  countryTotals:string = "Country Totals";

  constructor(private countryService:CountryService, private todayService:TodayService) {
  }

  ngOnInit() {
    this.countryService.getCounties().subscribe(resp => {
      this.countries = resp.sort((a, b) => {
        return a.Country.localeCompare(b.Country);
      });
    });
  } 

  chooseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
    this.getCountryCodeFromLocation(this.latitude, this.longitude);
  }

  getCountryCodeFromLocation(lat:number, lng:number) {
    this.countryService.getCountryCode(lat, lng).subscribe(resp => {
      this.countryName = resp["countryName"];
      this.countryCode = resp["countryCode"];
      this.setCountryTodoData(this.countryCode, this.countryName);
    });
  }

  setCountryTodoData(countryCode:string, countryName:string) {
    this.todayService.getSummary().subscribe(resp => {
      resp["Countries"].forEach(country => {
        if(country.CountryCode == countryCode && country.Country == countryName){
          this.countryTodayData.push(country.NewConfirmed);
          this.countryTodayData.push(country.NewRecovered);
          this.countryTodayData.push(country.NewDeaths);
          this.countryTotalData.push(country.TotalConfirmed);
          this.countryTotalData.push(country.TotalRecovered);
          this.countryTotalData.push(country.TotalDeaths);
        }
      })
    });
  }
}
