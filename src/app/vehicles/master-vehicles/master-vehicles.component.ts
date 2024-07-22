import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';
import { TripService } from 'src/app/trip.service';
import { UserServiceService } from 'src/app/user-service.service';
import { VehicleService } from 'src/app/vehicleService.service';

@Component({
  selector: 'app-master-vehicles',
  templateUrl: './master-vehicles.component.html',
  styleUrls: ['./master-vehicles.component.css']
})
export class MasterVehiclesComponent implements OnInit
{
  constructor(public vservice:VehicleService,public userService:UserServiceService,public router:Router, public masterVehicleService:MasterVehicleServiceService, public tripService:TripService){}

  public ob:any;
  public spVehicles:any[] =[];

  ngOnInit(): void 
  {
    this.ob = this.vservice.allMasterVehicle();
    this.ob.subscribe((res:any)=>{
      this.vservice.vehOb = res.data;
    })
  }

  public requestVehicle(obj:any):void
  {
    this.masterVehicleService.singleVehicle = obj
    this.router.navigateByUrl('/requestVehicle')
  }

  public storeVehicle(obj:any):void {
    this.masterVehicleService.singleVehicle = obj;
    this.router.navigateByUrl('/viewVehicles')
  }

  public ngOnDestroy():void{
    this.tripService.tempTripObj = this.tripService.tripObject
    this.tripService.tripObject = undefined;
  }
}
