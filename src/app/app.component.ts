import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareTagComponent } from './components/share-tag/share-tag.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HomepageComponent,
    FontAwesomeModule,
    ShareTagComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fbnquest-homepage-clone';
}
