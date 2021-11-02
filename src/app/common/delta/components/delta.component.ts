import { Component, Input } from '@angular/core';

@Component({
  selector: 'emed-delta',
  styleUrls: ['delta.component.scss'],
  templateUrl: 'delta.component.html'
})
export class DeltaComponent {

  @Input()
  delta!: number;

  get iconType(): string {
    return this.delta < 0 ? 'down' : 'up';
  }

  get trendDescription(): string {
    return this.delta < 0 ? 'Lower' : 'Higher';
  }

  get absoluteDelta(): number {
    return Math.abs(this.delta);
  }
}
