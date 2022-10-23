import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExtractionService {
  // Global Space Defined List => used for mini-table info
  specialCaseList1: any;
  specialCaseList2: any;
  specialCaseList3: Subject<any> = new Subject<any>();
  bistecchicoList: any[] = [];
  bistecgrandeList: any[] = [];
  churrascoList: any[] = [];
  chicharronList: any[] = [];
  chorizoList: any[] = [];
  chuletaparrillaList: any[] = [];
  chuletavallunaList: any[] = [];
  camaronescatalanaList: any[] = [];
  salmonlimonList: any[] = [];
  pescadofritoList: any[] = [];
  pescadocilantroList: any[] = [];
  tamalList: any[] = [];
  brisketList: any[] = [];
  sopapataconesList: any[] = [];
  lomoderesList: any[] = [];
  pechugadepolloList: any[] = [];
  polloguisadoList: any[] = [];
  aborrajadoList: any[] = [];
  empanadaList: any[] = [];
  cevicheList: any[] = [];
  pandebonoList: any[] = [];
  bunueloList: any[] = [];
  tequenosList: any[] = [];
  picadaList: any[] = [];

  // Display table of Inventory Categories
  displayTable: any[][] = [
    ['Bistec Chico', 0],
    ['Bistec Grande', 0],
    ['Churrasco', 0],
    ['Chicharron', 0],
    ['Chorizo', 0],
    ['Chuleta a la Parrilla', 0],
    ['Chuleta Valluna', 0],
    ['Camarones', 0],
    ['Salmon', 0],
    ['Pescado Frito', 0],
    ['Tilapia', 0],
    ['Tamal', 0],
    ['Brisket', 0],
    ['Sopa de Patacones', 0],
    ['Lomo de Res a la Parrilla', 0],
    ['Pechuga', 0],
    ['Pechuga Empanizada', 0],
    ['Pollo Guisado Leg', 0],
    ['Pollo Guisado Pechuga', 0],
    ['Aborrajado', 0],
    ['Empanada Beef', 0],
    ['Empanada Chicken', 0],
    ['Empanada Vegetable', 0],
    ['Ceviche', 0],
    ['Pandebono', 0],
    ['Buneulos', 0],
    ['Tequenos', 0],
  ];

  // CSV breakdown into usuable form
  // @param csv
  csvresult: any;
  arr1: any;
  arr2: any;
  specialCase: any = [
    ['Arepa', 'Chicharron & Cheese'],
    ['Arepa', 'Chicken & Cheese'],
    ['Arepa', 'Chorizo & Cheese'],
    ['Arepa', 'Chorizo No Cheese'],
    ['Arepa', 'Beef & Cheese'],
    ['Pollo Guisado', 'Pierna'],
    ['Pollo Guisado', 'Pechuga'],
    ['Sopa de Patacones', 'Small'],
    ['Sopa de Patacones', 'Medium'],
    ['Sopa de Patacones', 'Large'],
    ['Sopa de Ajiaco', 'Small'],
    ['Sopa de Ajiaco', 'Medium'],
    ['Sopa de Ajiaco', 'Large'],
    ['Empanada', 'Chicken'],
    ['Empanada', 'Beef'],
    ['Empanada', 'Vegetable'],
    ['Coctel de Camarones', 'Small'],
    ['Coctel de Camarones', 'Large'],
    ['Bunuelos', 'Single'],
    ['Bunuelos', 'Dozen'],
    ['Pandebono', 'Single'],
    ['Pandebono', 'Dozen'],
    ['Bandeja Paisa', 'Churrasco æ'],
    ['Bandeja Paisa Tipica Antioquena', 'Churrasco æ'],
    ['Bandeja Paisa', 'Extra Chicharron æ'],
    ['Bandeja Paisa Tipica Antioquena', 'Extra Chicharron æ'],
  ];
  specialCaseCopy: any;
  masterList: any[] = [
    ['Aborrajado'],
    ['Arepa'],
    ['Bunuelos'],
    ['Ceviche Peruano'],
    ['Coctel de Camarones'],
    ['Empanadas'],
    ['Morcilla'],
    ['Pandebono'],
    ['Patacones Rellenos'],
    ['Picada Colombiana'],
    ['Tequenos'],
    ['Sopa de Patacones'],
    ['Sopa de Ajiaco'],
    ['Ensalada de la Casa'],
    ['Ensalada de Tomate y Aguate'],
    ['Ensalada de Pollo'],
    ['Ensalada de Salmon'],
    ['Ensalada de Pescado'],
    ['Ensalada de Camarones'],
    ['Arroz con Pollo'],
    ['Bandeja Paisa'],
    ['Bandeja Paisa Tipica Antioquena'],
    ['Bistec a Caballo'],
    ['Bistec Criollo'],
    ['Bistec Encebollado'],
    ['Camarones a la Catalana'],
    ['Chuleta a la Parrilla'],
    ['Chuleta Valluna'],
    ['Churrasco'],
    ['Lomo de Res'],
    ['Pabellon'],
    ['Parillada Vegetariana'],
    ['Pechuga de Pollo'],
    ['Pechuga de Pollo Empanizada'],
    ['Pechuga Rellena'],
    ['Pescado en Cilantro y Mayonesa'],
    ['Pescado Frito'],
    ['Plato Vegetariano'],
    ['Pollo Empanizado Adultos'],
    ['Pollo Guisado'],
    ['Ropa Vieja'],
    ['Salmon En Limon Y Mantequilla'],
    ['Tamal Valluno'],
    ['Pollo Empanizado'],
    ['Pollo Guisado'],
    ['Carne Asada'],
    ['Pechuga de Pollo Kids'],
    ['Side Chicharron'],
    ['Side Chorizo'],
    ['Only Bistec Grande'],
    ['Only Camarones(6 Count)'],
    ['Only Carne Desmechada'],
    ['Only Chuleta-a-la-Parilla'],
    ['Only Chuleta'],
    ['Only Churrasco'],
    ['Only Pechuga de Pollo'],
    ['Only Pechuga de Pollo Empanizado'],
    ['Only Pescado Frito'],
    ['Only Pollo Guisado'],
    ['Only Salmon'],
    ['Only Tilapia'],
    ['Only Tamal'],
    ['Solo Lomo De Res'],
    ['Only Pechuga Rellena'],
    ["Chef's Special"],
    ['Lechon Asado'],
    ['Pechuga de Pollo de Champineones'],
    ['Surf and Turf'],
    ['Cazuela De Mariscos'],
    ['Sancocho De Gallina'],
    ['Sudado De Res'],
  ];

  extractorCSV(csvRecords: any) {

    //  console.log(csvRecords);
    //     let ct: any[] = this.numCount1
    
    // //standard Check to see if the file has skipped by any checkpoint
    // if (csvRecords) {
    //               alert('No Csv Uploaded, Please Try Again')
    //     }
    //     console.log(this.csvRecords);
    //     [this.arr1, this.specialArray] = this.extractionService.extractorPro(
    //     this.csvRecords
    //     );
    //     this.arr2 = [];
    //     this.arr3 = [];
    //     this.arr4 = [];
                        
    //                     // Extract the data from the csv records that is connected to selected entree's
    //     for (let i = 0; i < this.arr1.length; i++) {
    //               for (let c = 0; c < this.entreeList.length; c++) {
    //                             if (this.arr1[i][0] === this.entreeList[c].Entree) {
    //                             this.arr2.push([{ id: this.entreeList[c].id, sold: this.arr1[i][1] },
    //                             ])}
    //             }
    //   }

    


    let csvRecordsCopy = csvRecords;
    let suparr: any[];
    this.arr1 = [];
    this.csvresult = [];
    for (let i = 0; i < csvRecords.length; i++) {
      if (
        csvRecords[i][2] !== '' &&
        csvRecords[i][6] > 0 &&
        csvRecords[i][3] === ''
      ) {
        this.csvresult.push({
          Entree: csvRecords[i][2],
          Sold: csvRecords[i][5],
        });
      }
    }
    csvRecordsCopy = csvRecords;


    
    this.specialCaseCopy = this.specialCase;
    this.specialCaseList1 = [];
    this.specialCaseList2 = [];
    console.log(csvRecordsCopy);
    for (let i = 0; i < this.specialCase.length; i++) {
      for (let c = 0; c < csvRecords.length; c++) {
        if (
          this.specialCaseCopy[i][0] === csvRecordsCopy[c][2] &&
          this.specialCaseCopy[i][1] == csvRecordsCopy[c][3]
        ) {
          this.specialCaseList1.push([
            this.specialCaseCopy[i][0],
            this.specialCaseCopy[i][1],
            csvRecordsCopy[c][5],
          ]);
        }
      }
    }
    this.specialCaseCopy = this.specialCase;
    csvRecordsCopy = csvRecords;
    //masterlist of all entrees from the inventory
    for (let i = 0; i < this.masterList.length; i++) {
      suparr = [];
      let f = 0;
      let checker = 0;
      for (let z = 0; z < this.csvresult.length; z++) {
        if (this.csvresult[z].Entree === this.masterList[i][0]) {
          checker = checker + 1;
          suparr.push([this.csvresult[z].Entree, this.csvresult[z].Sold]);
        }
      }
      if (checker > 1) {
        for (let i = 0; i < suparr.length; i++) {
          f = Number(suparr[i][1]) + Number(f);
        }
        this.arr1.push([suparr[0][0], f]);
      }

      if (checker === 1) {
        //Loop on support array to get iterated values
        this.arr1.push([suparr[0][0], suparr[0][1]]);
      }
      console.log(`This is the end ${this.specialCaseList1}`);
    }
    return [this.arr1, this.specialCaseList1];
  }
}




