import { Component, OnInit } from '@angular/core';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';
import { VehicleService } from 'src/app/vehicleService.service';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {

  public masterVehicle:any="";
  public spVehicles:any[]=[];

  constructor(public vservice:VehicleService, public mvService:MasterVehicleServiceService)
  {}

  ngOnInit(): void {
    this.masterVehicle = this.mvService.singleVehicle;
    this.viewSPVehicles(this.masterVehicle)
  }

  public viewSPVehicles(obj:any):any{
    const response = this.vservice.getVehiclesByMasterVehicle(obj.vehicleMasterId)
    if(response!=null)
    {
      response.subscribe((res:any)=>
      {
        if(res.status){
          this.spVehicles = res.data;
        }
        else{
          console.log(res.message);
        }
      })
    }
    else{
      console.log("Response is null")
    }
  }
  
}
