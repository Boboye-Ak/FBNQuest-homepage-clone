import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layer-4',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './layer-4.component.html',
  styleUrl: './layer-4.component.css',
})
export class Layer4Component {
  faAngleRight = faAngleRight;
}
