import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layer-3',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './layer-3.component.html',
  styleUrl: './layer-3.component.css',
})
export class Layer3Component {
  faAngleRight=faAngleRight
}
