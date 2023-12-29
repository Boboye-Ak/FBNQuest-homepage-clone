import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Trend from '../../../../interfaces/Trend';

@Component({
  selector: 'app-layer-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layer-2.component.html',
  styleUrl: './layer-2.component.css',
})
export class Layer2Component {
  featureTrend: Trend = {
    headline: 'FBNQuest Entities Recognised at the Great Place to Work Awards.',
    snippet:
      'Lagos, Nigeria, November 2023- FBNQuest Merchant Bank, FBNQuest Asset Management, FBNQuest Trustees, and FBNQuest Capital were recently recognised at the',
    link: '',
  };
  trends: Trend[] = [
    {
      snippet:
        'FBNQuest Partners With Teach for Nigeria to Promote Educational Development in Nigeria',
      link: '',
    },
    {
      snippet:
        'Accounts Deceivable; Recognising and Managing Cybercrime-FBNQuest',
      link: '',
    },
    {
      snippet: 'Corporate Governance, The Boardroom & Beyond- FBNQuest',
      link: '',
    },
    {
      snippet:
        'How Venture Capital Firms in Nigeria Work & How to Secure Financing For Your Startup',
      link: '',
    },
  ];
  constructor() {}
}
