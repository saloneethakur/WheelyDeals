import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterVehiclesComponent } from './master-vehicles/master-vehicles.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MasterVehiclesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
    
  ]
})
export class VehiclesModule { }
