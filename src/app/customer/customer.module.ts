import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';



@NgModule({
  declarations: [
        CustomersComponent,
        CustomerBookingComponent
  ],
  imports: [
   BrowserModule,
   
    FormsModule,
  ]
  
})
export class CustomerModule { }
