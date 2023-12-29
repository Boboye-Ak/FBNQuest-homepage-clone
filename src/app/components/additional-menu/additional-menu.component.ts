import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-additional-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './additional-menu.component.html',
  styleUrl: './additional-menu.component.css',
})
export class AdditionalMenuComponent implements OnInit {
  faTimes = faTimes;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  searchInput: string = '';

  constructor() {}
  ngOnInit(): void {}
  clearSearchInput() {
    this.searchInput = '';
  }
}
