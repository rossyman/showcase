import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DateService {

  getYear(): string {
    return new Date().getFullYear().toString();
  }
}
