import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-layer-6',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './layer-6.component.html',
  styleUrl: './layer-6.component.css',
})
export class Layer6Component {
  faFacebook=faFacebook
  faTwitter=faTwitter
  faInstagram=faInstagram
  faYoutube=faYoutube
  faLinkedin=faLinkedin
}
