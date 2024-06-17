import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgForm } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [[RouterModule.forChild(routes)],AppRoutingModule, NgModule,NgForm],
  exports: [RouterModule]
})


  
export class AdminRoutingModule { }
