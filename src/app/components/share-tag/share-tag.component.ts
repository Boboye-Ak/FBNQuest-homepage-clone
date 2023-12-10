import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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


  scrollDown() {
    window.scroll({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: 'smooth', // Add smooth scroll behavior
    });
  }

  constructor(){
    
  }
  ngOnInit(): void {}
}
