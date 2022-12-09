import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Cars } from 'src/app/Model/cars';
import { CarsService } from 'src/app/Services/cars.service';
import { EditCarsComponent } from '../edit-cars/edit-cars.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { createUrlTreeFromSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carsList:Cars[]=[];
cars: any;
Make: any;

  
  constructor(private carsservice:CarsService,private dialog:MatDialog ,private router:Router ){}
  /* modal form of Edit*/
  
  
  openDialog() {
    const dialogRef = this.dialog.open(EditCarsComponent,
  {
    width:'50%'
    });
  }

  
  ngOnInit():void{
    // @viewchild('fileInput') fileInput:any;
this.carsservice.getAllCars().subscribe({next:(data)=>{
 this.carsList=data;

   console.log(this.carsList);
}},
  );
  }
//  ngOnInit():void{
//   this.carsservice.getAllCars().subscribe({next:(data)=>{this.carsList=data}});
//   console.log(this.carsList)
// }
    // error:(response)=>{
    // console.log(response);
    // }

  deletecars(carID:string){
    this.carsservice.deletecars(carID)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['/carfluent/cars'])
      }
    })
  }


  // searchcars(event: any) {
  //   let filteredEmployees: Cars[] = [];

  //   if (event === '') {
  //     this.carsList = this.cars;
  //   } else {
  //     filteredEmployees = this.cars.filter((val:any, index: any) => {
  //       let targetKey = val.make.toLowerCase() + '' + val.model.toLowerCase();
  //       let searchKey = event.toLowerCase();
  //       return targetKey.includes(searchKey);
  //     });
     
  //   }
  // }

} 

