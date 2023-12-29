import { Component } from '@angular/core';
import { DiscoverMoreCardComponent } from '../../../../components/discover-more-card/discover-more-card.component';
import { CommonModule } from '@angular/common';
import CardData from '../../../../interfaces/CardData';

@Component({
  selector: 'app-layer-5',
  standalone: true,
  imports: [DiscoverMoreCardComponent, CommonModule],
  templateUrl: './layer-5.component.html',
  styleUrl: './layer-5.component.css',
})
export class Layer5Component {
  cardData: CardData[] = [
    { text: '2023 Outlook', imageUrl: '../../../../../assets/glass-ball.jpg' },
    { text: 'Lifestyle', imageUrl: '../../../../../assets/woman-sitting.jpg' },
    {
      text: 'Ask the Experts',
      imageUrl: '../../../../../assets/customer-care-rep.jpg',
    },
    {
      text: 'Leading Conversations',
      imageUrl: '../../../../../assets/zoom-call.jpg',
    },
  ];
}
