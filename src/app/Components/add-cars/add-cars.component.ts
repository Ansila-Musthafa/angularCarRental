import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from 'src/app/Model/cars';
import { CarsService  } from 'src/app/Services/cars.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.css']
})
export class AddCarsComponent {
  addCarRequest:Cars={
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
    hub:'' ,
    kilometers:0,
    availabilitystatus:"",
    categoryPicklistID:0,
    CategoryId:0,
    
   
  
  }
   
constructor(private carsservice:CarsService,private router:Router){}

ngOnInit():void{

}
addCars(){
  this.carsservice.addCars(this.addCarRequest)
  .subscribe({
    next:(data)=>{
    this.router.navigate(['/carfluent/cars']);
    console.log(data);
    alert("Added succesfully")
    },
   
  })
 console.log(this.addCarRequest);
}
}