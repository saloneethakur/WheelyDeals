import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { AddVehicleMasterComponent } from './admin/add-vehicle-master/add-vehicle-master.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { ServiceProviderComponent } from './admin/service-provider/service-provider.component';
import { CustomerBookingComponent } from './customer/customer-booking/customer-booking.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { MasterVehiclesComponent } from './vehicles/master-vehicles/master-vehicles.component';
import { SpAddVehicleComponent } from './serviceprovider/sp-add-vehicle/sp-add-vehicle.component';
import { VehicleComponent } from './serviceprovider/vehicle/vehicle.component';


const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "about" , component : AboutComponent},
  {path : "login" , component : LoginComponent},
  {path : "MasterVehicle" , component : AddVehicleMasterComponent },
  {path : "adminCustomer" , component : CustomerComponent },
  {path:"adminService" , component: ServiceProviderComponent},
  {path:"customers/:id",component: CustomersComponent},
  {path:"allMasterVehicle",component:MasterVehiclesComponent},
 //{path: "serviceProvider", component : SpHomeComponent},
  { path: "serviceProvider", loadChildren: () => import('./serviceprovider/serviceprovider.module').then(m => m.ServiceproviderModule) },
 // {path : "admin" , component : AdminComponent},
    {path:"booking", component: CustomerBookingComponent},
    {path: "spAddVehicle", component: SpAddVehicleComponent},
    {path: "vehicle", component: VehicleComponent},
  {path : "MasterVehicle" , component : AddVehicleMasterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
