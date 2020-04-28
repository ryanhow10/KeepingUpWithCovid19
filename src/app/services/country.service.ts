import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url:string = "https://api.covid19api.com/countries"

  constructor(private http:HttpClient) { }

  getCounties():Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }
}
