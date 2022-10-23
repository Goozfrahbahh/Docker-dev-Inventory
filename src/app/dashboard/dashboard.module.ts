import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../shared/shared.module';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboardcomponent/dashboard.component';


@NgModule({
imports: [ SharedModule, NgxChartsModule ],
declarations: [ DashboardComponent, ChartsComponent ],
exports: [ DashboardComponent, ChartsComponent ]
})
export class DashboardModule {  } 


