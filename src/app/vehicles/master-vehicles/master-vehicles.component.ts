import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/vehicleService.service';

@Component({
  selector: 'app-master-vehicles',
  templateUrl: './master-vehicles.component.html',
  styleUrls: ['./master-vehicles.component.css']
})
export class MasterVehiclesComponent implements OnInit
{
  constructor(public vservice:VehicleService){}

  public ob:any;
  

  ngOnInit(): void 
  {
    this.ob = this.vservice.allMasterVehicle();
    this.ob.subscribe((res:any)=>{
      this.vservice.vehOb = res.data;
      console.log(this.vservice.vehOb);

    })
  }

  

}
