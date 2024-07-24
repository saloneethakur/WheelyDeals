import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';
import { RequestVehicleComponent } from './request-vehicle/request-vehicle.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { AppRoutingModule } from '../app-routing.module';
import { ViewVehicleBookingComponent } from './view-vehicle-booking/view-vehicle-booking.component';



@NgModule({
  declarations: [
        CustomersComponent,
        CustomerBookingComponent,
        RequestVehicleComponent,
        ViewRequestsComponent,
        ViewVehicleBookingComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
    FormsModule
  ]
  
})
export class CustomerModule { }
