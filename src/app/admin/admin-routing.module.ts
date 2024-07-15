import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [[RouterModule.forChild(routes)],AppRoutingModule, NgModule,NgForm],
  exports: [RouterModule]
})


  
export class AdminRoutingModule { }
