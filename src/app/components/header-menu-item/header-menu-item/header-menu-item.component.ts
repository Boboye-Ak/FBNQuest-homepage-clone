import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../../../interfaces/MenuItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-menu-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header-menu-item.component.html',
  styleUrl: './header-menu-item.component.css',
})
export class HeaderMenuItemComponent implements OnInit {
  faAngleDown = faAngleDown;
  @Input() title: string = '';
  @Input() menuItems: MenuItem[] = [];
  showDropDown: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onMouseOver() {
    console.log('entered');
    this.showDropDown = true;
  }
  onMouseOut() {
    setTimeout(() => {
      console.log('exited');
      this.showDropDown = false;
    }, 100);
  }
  toggleShow() {
    this.showDropDown = !this.showDropDown;
  }
}
