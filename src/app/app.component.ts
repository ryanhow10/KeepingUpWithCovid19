import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
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

  constructor(private countryService:CountryService) {
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
    });
  }
}
