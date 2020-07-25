import { Component, OnInit, Input } from '@angular/core';
import { maroon } from 'color-name';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() today: boolean = false;
  @Input() type: string;
  @Input() count: number;
  title: Map<string, string> = new Map([
    ['confirmed', 'Confirmed'],
    ['recovered', 'Recovered'],
    ['deaths', 'Deaths']
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
      case 'confirmed':
        classStyle['color'] = this.colors['blue'];
        break;
      case 'recovered':
        classStyle['color'] = this.colors['green'];
        break;
      case 'deaths':
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
      case 'confirmed':
        classStyle['border'] = '0.5em solid ' + this.colors['blue'];
        break;
      case 'recovered':
        classStyle['border'] = '0.5em solid ' + this.colors['green'];
        break;
      case 'deaths':
        classStyle['border'] = '0.5em solid ' + this.colors['red'];
        break;
    }
    return classStyle;
  }

}
