import { Component } from '@angular/core';
import { Cars } from 'src/app/Model/cars';
import { CarsService } from 'src/app/Services/cars.service';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
cars: any;

}
