import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navigation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
