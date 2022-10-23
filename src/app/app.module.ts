import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { MaterialModule } from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    MaterialModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxCsvParserModule,
    LayoutModule,
    SharedModule,
    CoreModule,
    DashboardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(router: Router) {
  //     // Use a custom replacer to display function names in the route configs
  //     const replacer: (key: string, value: any)  => ( 'value'  === 'function') ? value : value.toString)
  //     console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  //   }
  // } }
}