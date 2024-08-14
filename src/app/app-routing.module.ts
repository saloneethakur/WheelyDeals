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
import { RequestVehicleComponent } from './customer/request-vehicle/request-vehicle.component';
import { ViewRequestsComponent } from './customer/view-requests/view-requests.component';
import { ViewVehiclesComponent } from './admin/view-vehicles/view-vehicles.component';
import { ServiceProviderProfileComponent } from './serviceprovider/service-provider-profile/service-provider-profile.component';
import { ViewSpVehicleComponent } from './serviceprovider/view-sp-vehicle/view-sp-vehicle.component';
import { ViewVehicleBookingComponent } from './customer/view-vehicle-booking/view-vehicle-booking.component';
import { SpBookingComponent } from './serviceprovider/sp-booking/sp-booking.component';
import { SpRequestComponent } from './serviceprovider/sp-request/sp-request.component';
import { SpVehicleRequestComponent } from './serviceprovider/sp-vehicle-request/sp-vehicle-request.component';


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
  {path : "MasterVehicle" , component : AddVehicleMasterComponent },
  {path : "requestVehicle", component : RequestVehicleComponent},
  {path : "viewRequests", component : ViewRequestsComponent},
  {path:"viewVehicles", component: ViewVehiclesComponent},
  {path:"spProfile", component: ServiceProviderProfileComponent},
  {path:"viewSpVehicle", component: ViewSpVehicleComponent},
  {path:"viewVehicleBooking", component: ViewVehicleBookingComponent},
  {path:"spBooking", component: SpBookingComponent},
  {path:"spRequests", component:SpRequestComponent},
  {path:"spVehicleRequest", component:SpVehicleRequestComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
