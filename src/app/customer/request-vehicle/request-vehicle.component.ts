import { Component } from '@angular/core';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';

@Component({
  selector: 'app-request-vehicle',
  templateUrl: './request-vehicle.component.html',
  styleUrls: ['./request-vehicle.component.css']
})
export class RequestVehicleComponent {
  constructor(public masterVehicleService : MasterVehicleServiceService)
  {}

  public masterVehicle:any = undefined

  ngOnInit(): void {
    this.masterVehicle = this.masterVehicleService.singleVehicle;
}
}
