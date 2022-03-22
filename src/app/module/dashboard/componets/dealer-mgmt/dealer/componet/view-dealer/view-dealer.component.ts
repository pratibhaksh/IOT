import { DEALER_M } from './../model/dealerModel';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-view-dealer',
  templateUrl: './view-dealer.component.html',
  styleUrls: ['./view-dealer.component.scss']
})
export class ViewDealerComponent implements OnInit,AfterViewInit {
  //  dataSource: any;

   dataSource = new MatTableDataSource<DEALER_M>(ELEMENT_DATA);

   @ViewChild(MatPaginator) paginator: MatPaginator;
 
  @ViewChild(MatSort)
  // sort!: MatSort;
  pageLength = 100;
  pageSize = 10;
  data: any;
  displayedColumns = ['srno',  'dealerId','dealerName','dealerContact','dateOfRegistartion','lastUpdatedate','action'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {

  //  this.dataSource =  ELEMENT_DATA

    
  }


  openJobDialog(){

  }

  openDeleteDialog(){

  }
 ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}


const ELEMENT_DATA: DEALER_M[] = [
  {srno: 1, dealerName: 'Hydrogen', dealerId: 1.0079, dealerEmail: 'H',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 2, dealerName: 'Helium', dealerId: 4.0026, dealerEmail: 'He',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 3, dealerName: 'Lithium', dealerId: 6.941, dealerEmail: 'Li',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 4, dealerName: 'Beryllium', dealerId: 9.0122, dealerEmail: 'Be',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 5, dealerName: 'Boron', dealerId: 10.811, dealerEmail: 'B',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 6, dealerName: 'Carbon', dealerId: 12.0107, dealerEmail: 'C',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 7, dealerName: 'Nitrogen', dealerId: 14.0067, dealerEmail: 'N',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 8, dealerName: 'Oxygen', dealerId: 15.9994, dealerEmail: 'O',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 9, dealerName: 'Fluorine', dealerId: 18.9984, dealerEmail: 'F',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
  {srno: 10, dealerName: 'Neon', dealerId: 20.1797, dealerEmail: 'Ne',dealerContact:8909890098,dateOfRegistartion:'10/08/2021',lastUpdatedate:'10/08/2021'},
 
  
];
