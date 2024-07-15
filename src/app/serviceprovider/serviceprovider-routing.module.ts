import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SpHomeComponent } from './sp-home/sp-home.component';
import { SpComponent } from './sp/sp.component';
import { VehicleChargesComponent } from './vehicle-charges/vehicle-charges.component';
import { SpAddVehicleComponent } from './sp-add-vehicle/sp-add-vehicle.component';

const routes: Routes = [
  {path:"" , component:SpComponent, children: [
    {path:"" , component:SpHomeComponent},
    {path: "vehicle", component: VehicleComponent},
    {path: "spAddVehicle", component : SpAddVehicleComponent},
    {path:"vehiclecharges", component:VehicleChargesComponent}
  ]},
  {path: "spAddVehicle", component: SpAddVehicleComponent},
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ServiceProviderRoutingModule{}