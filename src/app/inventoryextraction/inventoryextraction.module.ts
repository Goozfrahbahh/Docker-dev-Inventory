import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { InventoryExtractionComponent } from './inventoryextraction/inventoryextraction.component';
import { ExtractionService } from './services/extraction.service';

// import { InventoryDatePickerComponent  } from './inventorydatepicker/inventorydatepicker.component';
// import { InventoryTableComponent } from './inventorytable/inventorytable.component';

@NgModule({
  imports: [SharedModule],
  declarations: [InventoryExtractionComponent],
  providers: [ExtractionService],
  exports: [InventoryExtractionComponent],
})
export class InventoryExtractionModule {}
