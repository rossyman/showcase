import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { PrincipalUserGuard } from '../../auth/providers/principal-user.guard';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [PrincipalUserGuard]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
