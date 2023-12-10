import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderMenuItemComponent } from '../header-menu-item/header-menu-item/header-menu-item.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AdditionalMenuComponent } from '../additional-menu/additional-menu.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderMenuItemComponent,
    AdditionalMenuComponent,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isAtTop: boolean = true;
  showAdditionalMenu: boolean = false;
  faBars = faBars;
  faTimes = faTimes;
  constructor(private uiService: UiService) {}
  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.isAtTop = window.scrollY > 0 ? false : true;
  }
  toggleShowAdditionalMenu() {
    this.showAdditionalMenu = !this.showAdditionalMenu;
  }
}
