import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboardcomponent/dashboard.component';
import { InventoryExtractionComponent } from './inventoryextraction/inventoryextraction/inventoryextraction.component';
import { SelectivePreloadingStrategyService } from './shared/services/selectivepreloadingstrategy.service';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "extraction", component: InventoryExtractionComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

