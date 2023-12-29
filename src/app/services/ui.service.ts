import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private _showSearchForm = new BehaviorSubject<boolean>(false);
  showSearchForm$ = this._showSearchForm.asObservable();
  constructor() {}

  toggleSearchFormOn() {
    this._showSearchForm.next(true);
  }
  toggleSearchFormOff() {
    this._showSearchForm.next(false);
  }
}
