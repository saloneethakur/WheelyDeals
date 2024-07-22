import { Component } from '@angular/core';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';
import { TripService } from 'src/app/trip.service';

@Component({
  selector: 'app-request-vehicle',
  templateUrl: './request-vehicle.component.html',
  styleUrls: ['./request-vehicle.component.css']
})
export class RequestVehicleComponent {
  constructor(public masterVehicleService : MasterVehicleServiceService, public tripService:TripService)
  {}

  public masterVehicle:any = undefined
  public tripData:any = undefined

  ngOnInit(): void {
    this.masterVehicle = this.masterVehicleService.singleVehicle;
    this.tripData = this.tripService.tempTripObj
  }

  ngOnDestroy():void{
    this.tripService.tempTripObj = undefined;
  }
}
