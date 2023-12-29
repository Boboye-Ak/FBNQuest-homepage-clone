import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-more-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-more-card.component.html',
  styleUrl: './discover-more-card.component.css',
})
export class DiscoverMoreCardComponent implements OnInit {
  isHovered: boolean = false;
  @Input() cardData!: { text: string; imageUrl: string };
  constructor() {}
  ngOnInit(): void {}
  onMouseEnter() {
    this.isHovered = true;
    console.log('hovered');
  }
  onMouseLeave() {
    this.isHovered = false;
    console.log('not hovered');
  }
}
