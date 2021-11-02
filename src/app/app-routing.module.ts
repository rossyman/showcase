import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
}, {
  path: 'not-entitled',
  loadChildren: () => import('./pages/not-entitled/not-entitled.module').then(m => m.NotEntitledModule)
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
