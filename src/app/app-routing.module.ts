import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { AddVehicleMasterComponent } from './admin/add-vehicle-master/add-vehicle-master.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "about" , component : AboutComponent},
  {path : "login" , component : LoginComponent},
 // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
 // {path : "admin" , component : AdminComponent},
  {path : "MasterVehicle" , component : AddVehicleMasterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
