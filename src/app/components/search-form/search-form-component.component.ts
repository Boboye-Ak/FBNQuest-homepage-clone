import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-search-form-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-form-component.component.html',
  styleUrl: './search-form-component.component.css',
})
export class SearchFormComponent implements OnInit, OnDestroy {
  //DATA

  //CONSTRUCTOR
  constructor(private uiService: UiService) {}

  //COMPUTED

  //HOOKS
  ngOnInit(): void {}
  ngOnDestroy(): void {}

  //METHODS
  hideSearchForm() {
    this.uiService.toggleSearchFormOff();
  }
  stopProp(event: Event) {
    event.stopPropagation();
  }
}
