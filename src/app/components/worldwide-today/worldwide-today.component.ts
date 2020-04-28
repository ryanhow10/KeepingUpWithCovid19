import { Component, OnInit, NgModule } from '@angular/core';
import { TodayService } from '../../services/today.service';

@Component({
  selector: 'app-worldwide-today',
  templateUrl: './worldwide-today.component.html',
  styleUrls: ['./worldwide-today.component.css']
})

export class WorldwideTodayComponent implements OnInit {

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
