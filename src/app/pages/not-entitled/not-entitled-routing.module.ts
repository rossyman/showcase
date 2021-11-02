import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotEntitledComponent } from './components/not-entitled.component';

const routes: Routes = [{
  path: '',
  component: NotEntitledComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotEntitledRoutingModule {
}
