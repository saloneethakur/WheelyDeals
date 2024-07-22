import { Component } from '@angular/core';
import { VehicleService } from 'src/app/vehicleService.service';

@Component({
  selector: 'app-view-sp-vehicle',
  templateUrl: './view-sp-vehicle.component.html',
  styleUrls: ['./view-sp-vehicle.component.css']
})
export class ViewSpVehicleComponent {

  constructor(public vehicleService:VehicleService){}

  public spVehicle:any = undefined;

  ngOnInit():void{
    tabsView()
    this.storeSpVehicle()
  }

  public storeSpVehicle():void{
      this.spVehicle = this.vehicleService.viewSpVehicle;
  }
}
