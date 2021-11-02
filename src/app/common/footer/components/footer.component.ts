import { Component } from '@angular/core';
import { DateService } from '../../../providers/date/date.service';

@Component({
  selector: 'emed-footer',
  styleUrls: ['footer.component.scss'],
  templateUrl: 'footer.component.html'
})
export class FooterComponent {

  constructor(private _dateService: DateService) {
  }

  get year(): string {
    return this._dateService.getYear();
  }
}
