import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Invenitems, OptionalParams } from "../../shared/models/inventoryitems";

// import { InventoryService } from

@Component({
  selector: "visual-organizer",
  templateUrl: "inventoryorganizer.component.html",
})
export class InventoryOrganizerComponent implements OnInit {
  url = "https://api.inventory/v1/items/:id";
  constructor() {} // private inventoryService: InventoryService

  ngOnInit() {}

  addInventoryItem(
    name: string,
    options?: OptionalParams
  ): Observable<Invenitems[]> | void {
    // change any to item
    // return this.inventoryService,
  }
}
