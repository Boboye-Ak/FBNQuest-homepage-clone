import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderMenuItemComponent } from '../header-menu-item/header-menu-item/header-menu-item.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMenuItemComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isAtTop: boolean = true;
  constructor(private uiService: UiService) {}
  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.isAtTop = window.scrollY > 0 ? false : true;
  }
}
