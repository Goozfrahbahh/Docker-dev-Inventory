import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth/auth.component';


@NgModule({
    imports: [ SharedModule ],
    declarations: [ AuthComponent],
    exports: [ AuthComponent, MaterialModule,  FormsModule, ReactiveFormsModule ],
})
export class CoreModule { } // Core Module for authentication, shared components, shared services

