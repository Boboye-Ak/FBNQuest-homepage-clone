import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discover-more-card',
  standalone: true,
  imports: [],
  templateUrl: './discover-more-card.component.html',
  styleUrl: './discover-more-card.component.css',
})
export class DiscoverMoreCardComponent {
  @Input() cardData!: { text: string; imageUrl: string };
}
