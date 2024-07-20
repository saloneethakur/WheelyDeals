import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';
import { UserServiceService } from 'src/app/user-service.service';
import { VehicleService } from 'src/app/vehicleService.service';

@Component({
  selector: 'app-master-vehicles',
  templateUrl: './master-vehicles.component.html',
  styleUrls: ['./master-vehicles.component.css']
})
export class MasterVehiclesComponent implements OnInit
{
  constructor(public vservice:VehicleService,public userService:UserServiceService,public router:Router, public masterVehicleService:MasterVehicleServiceService){}

  public ob:any;
  

  ngOnInit(): void 
  {
    this.ob = this.vservice.allMasterVehicle();
    this.ob.subscribe((res:any)=>{
      this.vservice.vehOb = res.data;
      console.log(this.vservice.vehOb);

    })
  }

  public requestVehicle(obj:any):void
  {
    this.masterVehicleService.singleVehicle = obj
    this.router.navigateByUrl('/requestVehicle')
  }

  public viewVehicles(obj:any):void {
    this.router.navigateByUrl('/viewVehicles')
  }
}
