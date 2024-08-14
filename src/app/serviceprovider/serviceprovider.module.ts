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
import { SpRequestComponent } from './sp-request/sp-request.component';
import { SpBookingComponent } from './sp-booking/sp-booking.component';
import { SpVehicleRequestComponent } from './sp-vehicle-request/sp-vehicle-request.component';



@NgModule({
  declarations: [
    SpHomeComponent,
    VehicleComponent,
    SpAddVehicleComponent,
    SpComponent,
    VehicleChargesComponent,
    SpAllVehiclesComponent,
    ServiceProviderProfileComponent,
    ViewSpVehicleComponent,
    SpRequestComponent,
    SpBookingComponent,
    SpVehicleRequestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServiceProviderRoutingModule,
    HttpClientModule
  ]
})
export class ServiceproviderModule { }
