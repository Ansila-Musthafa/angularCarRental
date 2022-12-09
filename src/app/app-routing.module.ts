import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarsComponent } from './Components/add-cars/add-cars.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { CarsComponent } from './Components/cars/cars.component';
import { HeaderComponent } from './Components/layoutComponents/header/header.component';
import { ManageCarsComponent } from './Components/manage-cars/manage-cars.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { SpecialOffersComponent } from './Components/special-offers/special-offers.component';
import { UsersComponent } from './Components/users/users.component';
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { ReturnedCarsComponent } from './Components/returned-cars/returned-cars.component';
import { EditCarsComponent } from './Components/edit-cars/edit-cars.component';
import { TableListComponent } from './Shared/table-list/table-list.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';




const routes: Routes = [
  {path:'',redirectTo:"/signin",pathMatch:"full"},
  {path:'signin',component:SigninComponent},
  {path:'login',component:LoginComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
 
  {path:'carfluent',component:HeaderComponent,
children:[
  {path:'home',component:MainComponent},
  {path:'managecars',component:ManageCarsComponent},
  {path:'users',component:UsersComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'promocodes',component:SpecialOffersComponent},
  {path:'addcars',component:AddCarsComponent},
  {path:'cars',component:CarsComponent},
  {path:'edit/:carID',component:EditCarsComponent},
  {path:'returnedcars',component:ReturnedCarsComponent},
]
  },
 
  
 

    
    // {path:'logout',component:LogoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
