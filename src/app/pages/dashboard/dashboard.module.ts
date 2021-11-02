import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeltaModule } from '../../common/delta/delta.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    DeltaModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')})
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
