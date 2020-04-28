import { Component } from '@angular/core';
import { CountryService } from './services/country.service';
import { Country } from './models/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today:Date = new Date();
  countries:Country[];
  searchCountry:string;

  constructor(private countryService:CountryService) {}

  ngOnInit() {
    this.countryService.getCounties().subscribe(resp => {
      this.countries = resp;
    });
  }
}
