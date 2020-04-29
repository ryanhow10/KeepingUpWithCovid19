import { Component, OnInit } from '@angular/core';
import { TotalsService } from '../../services/totals.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  totalConfirmed:number;
  totalRecovered:number;
  totalDeaths:number;

  constructor(private totalsService:TotalsService) { }

  ngOnInit(): void {
    this.totalsService.getSummary().subscribe(resp => {
      this.totalConfirmed = resp["Global"].TotalConfirmed;
      this.totalRecovered = resp["Global"].TotalRecovered;
      this.totalDeaths = resp["Global"].TotalDeaths;
    });
  }

}
