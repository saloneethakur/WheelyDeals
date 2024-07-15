import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';
import { ServiceproviderService } from '../serviceprovider.service';

@Component({
  selector: 'app-vehicle-charges',
  templateUrl: './vehicle-charges.component.html',
  styleUrls: ['./vehicle-charges.component.css']
})
export class VehicleChargesComponent implements OnInit 
{
  public masterVehicle:any = this.masterVehicleService.singleVehicle
  public vehicleCharges:any = {
    "chargesId":"",
    "minPerDayKm":"",
    "petrolRatePerKm":"",
    "cngRatePerKm":"",
    "dieselRatePerKm":"",
    "evRatePerKm":"",
    "acRatePerKm":""
  }
  public dataStatus:boolean = false
  public msg:String = "";

  constructor(public masterVehicleService:MasterVehicleServiceService, public router:Router, public serviceProviderService:ServiceproviderService)
  {}

  ngOnInit(): void {
    
    const response = this.serviceProviderService.viewCharges();
    if(response != null){
      response.subscribe((res:any)=>{
        if(res.status && res.data != null){
           this.vehicleCharges = res.data
            this.dataStatus = true
        }
        else{
            this.dataStatus = false;
            this.vehicleCharges = {
              "chargesId":"",
              "minPerDayKm":"",
              "petrolRatePerKm":"",
              "cngRatePerKm":"",
              "dieselRatePerKm":"",
              "evRatePerKm":"",
              "acRatePerKm":""
            }
            this.msg = res.message
        }
      })
    }
    else{
      console.log("Error Response null")
    }
  }

  public addUpdateCharges(data:any, event:any, cid:any):void {
    if(cid>0)
    {
      data.vehicleMasterId = this.masterVehicle.vehicleMasterId
      console.log(data.vehicleMasterId)
      const response = this.serviceProviderService.updateCharges(data,cid);
      if(response!=null){
        response.subscribe((res:any)=>{
          if(res.status && res.data != null){
            this.vehicleCharges = res.data;
            this.msg = res.message;
          }
          else{
            this.msg= res.message
          }
        })
      }
      else{
        console.log("Response Null")
      }
    }
    else
    {
      data.vehicleMasterId = this.masterVehicle.vehicleMasterId
      const response = this.serviceProviderService.addCharges(data);
      if(response!=null)
      {
        response.subscribe((res:any)=>{
          if(res.status && res.data !=null)
          {
            this.vehicleCharges = res.data;
            this.msg = res.message;
          }
          else{
            this.msg = res.message
          }
        })
      }
      else{
        console.log("Response Null")
      }
    }
   
  }
}
