import { Routes } from '@angular/router';

import { AdminComponent } from '../core/admin/admin.component';
import { DashboardComponent } from '../dashboard/dashboardcomponent/dashboard.component';
import { InventoryExtractionComponent } from '../inventoryextraction/inventoryextraction/inventoryextraction.component';
import { InventoryOrganizerComponent } from '../inventoryorganizer/inventoryorganizer/inventoryorganizer.component';
import { AuthGuard } from './guards/auth.guard';

const adminRoute: Routes = [{
       path: 'admin', 
       component: AdminComponent,
       canActivate: [AuthGuard],
              children: [
                           { path: '', component: DashboardComponent },
                           { path: 'childpath2', component: InventoryExtractionComponent },
                           { path: 'childpath3', component: InventoryOrganizerComponent },
                           
              ]
      } ]

