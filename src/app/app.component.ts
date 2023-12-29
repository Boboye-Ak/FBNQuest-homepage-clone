import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareTagComponent } from './components/share-tag/share-tag.component';
import { SearchFormComponent } from './components/search-form/search-form-component.component';
import { UiService } from '../app/services/ui.service';

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
    SearchFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FBNQuest - Merchant Banking & Asset Management';
  isSearchFormShown$ = this.uiService.showSearchForm$;
  constructor(private uiService: UiService) {}
  hideSearchForm() {
    this.uiService.toggleSearchFormOff();
  }
}
