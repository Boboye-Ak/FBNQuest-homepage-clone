import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Layer1Data from '../../../../interfaces/Layer1Data';

@Component({
  selector: 'app-layer-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layer-1.component.html',
  styleUrl: './layer-1.component.css',
})
export class Layer1Component implements OnInit {
  layer1Data: Layer1Data[] = [
    {
      text: 'Opportunities for Stronger Portfolio Diversification',
      imageUrl: '../../../../../assets/city-buildings.jpg',
      link: '',
    },
    {
      text: 'Private Equity as a Viable Alternative Asset Class',
      imageUrl: '../../../../../assets/shape-cards.jpg',
      link: '',
    },
    {
      text: 'Insights to Generational Wealth Transfer',
      imageUrl: '../../../../../assets/mother-and-child.jpg',
      link: '',
    },
  ];

  currentDataIndex: number = this.layer1Data.length - 1;

  constructor() {}

  nextData() {
    if (this.currentDataIndex == this.layer1Data.length - 1) {
      this.currentDataIndex = 0;
    } else {
      this.currentDataIndex++;
    }
    console.log(`current index is ${this.currentDataIndex}`);
  }
  startCycle() {
    setTimeout(() => {
      this.nextData();
      setInterval(() => {
        this.nextData();
      }, 5000);
    }, 5000);
  }

  onBarClick(index: number) {
    this.currentDataIndex = index;
  }

  ngOnInit(): void {
    this.startCycle();
  }
}
