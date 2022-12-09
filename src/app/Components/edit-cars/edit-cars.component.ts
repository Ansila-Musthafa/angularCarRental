import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { Cars } from 'src/app/Model/cars';
import { CarsService } from 'src/app/Services/cars.service';
import { AddCarsComponent } from '../add-cars/add-cars.component';

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent {
 formModal:any;

cardetails:Cars={

    carID:"",
    make:" " ,
    model: " ",
    fuelType:" ",
    transmissionType:" ",
    numberOfSeats:0,
    colour:" ",
    registrationNumber:" ",
    price:0,
    carType:" ",
    hub:"",
    kilometers:0,
    availabilitystatus:"",
    categoryPicklistID:0,
    CategoryId:0,

};

 constructor(private route:ActivatedRoute,private carservice:CarsService,private router:Router){}
// cars:Cars=AddCarsComponent;
 ngOnInit():void{
this.route.paramMap.subscribe({
  next:(params)=>
  {
   const carID= params.get('carID');
   if(carID){
    //call api
    this.carservice.getcar(carID)
    .subscribe({
      next:(response) =>{
      this.cardetails=response;
    console.log(this.cardetails) ;    
    }

        })
      }
    }
  })
 }
 updatecars(){
 this.carservice.updatecars(this.cardetails.carID,this.cardetails)
   .subscribe({
  next:(response)=>
  {
   this.router.navigate(['/carfluent/cars']);
   console.log(response);
 }
 })
 }
close(){
  this.router.navigate(['/carfluent/cars']);
}
}
