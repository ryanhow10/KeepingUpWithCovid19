import { Component, OnInit, Input } from '@angular/core';
import { maroon } from 'color-name';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() type: string;
  @Input() count: number;
  title: Map<string, string> = new Map([
    ['newlyConfirmed', 'Newly Confirmed'],
    ['newlyRecovered', 'Newly Recovered'],
    ['newDeaths', 'New Deaths']
  ]);
  colors: object = {
    blue: 'hsl(240, 100%, 37%)',
    red: '#ff6363',
    green: '#20e47d'
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.type);
  }

  getCardStyle() {
    let classStyle = {
      'font-size': '1.25em'
    };
    switch (this.type) {
      case 'newlyConfirmed':
        classStyle['color'] = this.colors['blue'];
        break;
      case 'newlyRecovered':
        classStyle['color'] = this.colors['green'];
        break;
      case 'newDeaths':
        classStyle['color'] = this.colors['red'];
        break;
    }
    return classStyle;
  }

  getCardLineStyle() {
    let classStyle = {
      'border-top-right-radius': '0.5em',
      'border-top-left-radius': '0.5em',
      'margin-bottom': '0'
    };
    switch (this.type) {
      case 'newlyConfirmed':
        classStyle['border'] = '0.5em solid ' + this.colors['blue'];
        break;
      case 'newlyRecovered':
        classStyle['border'] = '0.5em solid ' + this.colors['green'];
        break;
      case 'newDeaths':
        classStyle['border'] = '0.5em solid ' + this.colors['red'];
        break;
    }
    return classStyle;
  }

}
