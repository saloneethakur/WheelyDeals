import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpHomeComponent } from './sp-home/sp-home.component';
import { FormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceProviderRoutingModule } from './serviceprovider-routing.module';
import { SpAddVehicleComponent } from './sp-add-vehicle/sp-add-vehicle.component';
import { SpComponent } from './sp/sp.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleChargesComponent } from './vehicle-charges/vehicle-charges.component';
import { SpAllVehiclesComponent } from './sp-all-vehicles/sp-all-vehicles.component';
import { ServiceProviderProfileComponent } from './service-provider-profile/service-provider-profile.component';
import { ViewSpVehicleComponent } from './view-sp-vehicle/view-sp-vehicle.component';



@NgModule({
  declarations: [
    SpHomeComponent,
    VehicleComponent,
    SpAddVehicleComponent,
    SpComponent,
    VehicleChargesComponent,
    SpAllVehiclesComponent,
    ServiceProviderProfileComponent,
    ViewSpVehicleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServiceProviderRoutingModule,
    HttpClientModule
  ]
})
export class ServiceproviderModule { }
