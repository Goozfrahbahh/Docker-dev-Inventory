import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../material.module';
import { DataTableComponent } from './components/datatables/data-table.component';
import { MessagesComponent } from './components/messages/messages.component ';
import { ClickOutsideDirective } from './directives/clickoutside.directive';
import { ObserveVisibilityDirective } from './directives/observability.directive';
import { WebViewDirective } from './directives/webview.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MessagesComponent,
    DataTableComponent,
    WebViewDirective,
    ClickOutsideDirective,
    ObserveVisibilityDirective,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesComponent,
    DataTableComponent,
    WebViewDirective,
    ClickOutsideDirective,
    ObserveVisibilityDirective,
    BrowserAnimationsModule
  ],
})
export class SharedModule {}
