import { Component, OnInit, NgModule } from '@angular/core';
import { TodayService } from '../../services/today.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent implements OnInit {

  newlyConfirmed:number;
  newlyRecovered:number;
  newDeaths:number;

  constructor(private todayService:TodayService) { }

  ngOnInit(): void {
    this.todayService.getSummary().subscribe(resp => {
      this.newlyConfirmed = resp["Global"].NewConfirmed;
      this.newlyRecovered = resp["Global"].NewRecovered;
      this.newDeaths = resp["Global"].NewDeaths;
    })
  }



}
