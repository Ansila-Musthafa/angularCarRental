import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/layoutComponents/header/header.component';
import { ManageCarsComponent } from './Components/manage-cars/manage-cars.component';
import { AddCarsComponent } from './Components/add-cars/add-cars.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SideNavigationComponent } from './Components/layoutComponents/side-navigation/side-navigation.component';
import { CarsComponent } from './Components/cars/cars.component';
import { UsersComponent } from './Components/users/users.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { SpecialOffersComponent } from './Components/special-offers/special-offers.component';
import {MatCardModule} from '@angular/material/card';
import { MainComponent } from './Components/main/main.component';
import { LoginComponent } from './Components/login/login.component';
import { ReturnedCarsComponent } from './Components/returned-cars/returned-cars.component';
import { TableListComponent } from './Shared/table-list/table-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCarsComponent } from './Components/edit-cars/edit-cars.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CarsService } from './Services/cars.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManageCarsComponent,
    AddCarsComponent,
    SideNavigationComponent,
    CarsComponent,
    UsersComponent,
    BookingsComponent,
    PaymentsComponent,
    SpecialOffersComponent,
    MainComponent,
    LoginComponent,
    ReturnedCarsComponent,
    TableListComponent,
    EditCarsComponent,
    SigninComponent,
    ResetpasswordComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
