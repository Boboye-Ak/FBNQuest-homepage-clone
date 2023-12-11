import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-share-tag',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './share-tag.component.html',
  styleUrl: './share-tag.component.css',
})
export class ShareTagComponent implements OnInit {
  faAngleDown = faAngleDown;
  isHovered: boolean = false;

  faFacebook=faFacebook
  faTwitter=faTwitter
  faLinkedin=faLinkedin
  faWhatsapp=faWhatsapp

  scrollDown() {
    window.scroll({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: 'smooth', // Add smooth scroll behavior
    });
  }

  constructor() {}
  ngOnInit(): void {}
}
