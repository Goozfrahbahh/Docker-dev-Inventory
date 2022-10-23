import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: "inventory-extractor",
  templateUrl: "./inventoryextraction.component.html",
  styleUrls: ["./inventoryextraction.component.css"],
})
export class InventoryExtractionComponent implements OnInit {
  csvFilePath: string = "";
  csvRecords: any;
  headers = [];
  header = true;
  head: any = [{ header: "Item_Name" }, { header: "Modifications" }];
  uploadDate: string;
  csvnew: any;

  @ViewChild("fileImportInput", { static: false }) fileImportInput:
    | ElementRef
    | undefined;

  //  @Output() filesDropped = new EventEmitter<NgxFileDropEntity[]>();

  csv$: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);
  csvParse$ = this.csv$.asObservable();

  constructor(private ngxCsvParser: NgxCsvParser) {}

  ngOnInit() {}

  fileChangeListener($event: any): void {
    const files = $event.srcElement.files;
    const uploadFile = files[0];
    const inputNode: any = document.querySelector("#file");
    console.log(files);
    //Check to see if file uploaded correctly
    if (!files) {
      console.log("No Csv File Uploaded, Please Try Again");
    }

    //Extract Date From FileName
    this.header = true;

    let uploadDate = files[0];
    console.log(this.uploadDate);

    // Parse Up[oaded File into csvRecords, we are subscribing to the csv data stream so we must unsubcribe later
    this.ngxCsvParser
      .parse(files[0], { header: this.header, delimiter: "," })
      .pipe()
      .subscribe({
        next: (result): void => {
          this.headers = result[0];
          this.csvRecords = result;
          return this.csvRecords;
        },
        error: (error: NgxCSVParserError): void => {
          console.log("Error", error);
        },
      });
  }
  extractionMethod() {
    console.log(this.csvRecords);
  }
}
