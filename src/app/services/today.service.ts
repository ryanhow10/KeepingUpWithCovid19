import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodayService {
  url:string = "https://api.covid19api.com/summary"

  constructor(private http:HttpClient) { }

  getSummary(){
    return this.http.get(this.url);
  }
}
