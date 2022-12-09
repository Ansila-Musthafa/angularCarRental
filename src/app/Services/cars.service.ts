import { HttpClient } from '@angular/common/http';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditCarsComponent } from '../Components/edit-cars/edit-cars.component';
import { Cars } from '../Model/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  baseApiUrl:string=environment.baseApiUrl;

constructor(private http:HttpClient){}
  

getAllCars():Observable<Cars[]>{
 
  return this.http.get<Cars[]>(this.baseApiUrl +'/api/Car/Get');

 }


 addCars(addCarRequest:Cars):Observable<Cars>{

   return this.http.post<Cars>(this.baseApiUrl + '/api/Car/Add',addCarRequest);
 }

getcar(carID:string):Observable<Cars>{
  return this.http.get<Cars>(this.baseApiUrl+'/api/Car/get/' + carID);
}

updatecars(carID:string,updatecarRequest:Cars):Observable<Cars>{
return this.http.post<Cars>(this.baseApiUrl+'/api/Car/Update/'+carID ,updatecarRequest);
}


deletecars(carID:string):Observable<Cars>{
  return this.http.delete<Cars>(this.baseApiUrl + '/api/Car/Delete/' + carID);
 }



}