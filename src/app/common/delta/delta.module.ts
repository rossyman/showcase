import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeltaComponent } from './components/delta.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DeltaComponent],
  exports: [DeltaComponent]
})
export class DeltaModule {
}
