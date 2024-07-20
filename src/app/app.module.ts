import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddVehicleMasterComponent } from './admin/add-vehicle-master/add-vehicle-master.component';
import { CustomerComponent } from './admin/customer/customer.component';

import { ServiceProviderComponent } from './admin/service-provider/service-provider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CustomerModule } from './customer/customer.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ServiceproviderModule } from './serviceprovider/serviceprovider.module';
import { ServiceProviderRoutingModule } from './serviceprovider/serviceprovider-routing.module';
import { MasterVehiclesComponent } from './vehicles/master-vehicles/master-vehicles.component';
import { ViewVehiclesComponent } from './admin/view-vehicles/view-vehicles.component';
import { EditVehiclesComponent } from './edit-vehicles/edit-vehicles.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddVehicleMasterComponent,
    CustomerComponent,
    ServiceProviderComponent,
    ViewVehiclesComponent,
    EditVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    CustomerModule,
    VehiclesModule,
	ServiceproviderModule,
    ServiceProviderRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
