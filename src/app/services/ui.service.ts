import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isAtTop: boolean = true;
  private subject = new Subject<any>();
  constructor() {}




}
