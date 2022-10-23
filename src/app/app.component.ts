import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent implements OnInit {
  status: boolean = false;
  statusLink: boolean = false;

  constructor() {}

  ngOnInit() {}

  onMouseEnter() {
    this.statusLink = true;
    this.status = true;
  }

  onMouseEnter2() {
    this.statusLink = false;
    this.status = false;
  }

  onMouseOut() {
    this.status = false;
    this.statusLink = false;
  }

  clickedOutside(): void {
    this.statusLink = false;
    this.status = false;
  }
}
