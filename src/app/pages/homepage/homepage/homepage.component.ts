import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { Layer1Component } from './layer-1/layer-1.component';
import { Layer2Component } from './layer-2/layer-2.component';
import { Layer3Component } from './layer-3/layer-3.component';
import { Layer4Component } from './layer-4/layer-4.component';
import { Layer5Component } from './layer-5/layer-5.component';
import { Layer6Component } from './layer-6/layer-6.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeaderComponent,
    Layer1Component,
    Layer2Component,
    Layer3Component,
    Layer4Component,
    Layer5Component,
    Layer6Component,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
