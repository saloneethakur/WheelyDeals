import { Component } from '@angular/core';
import { ServiceproviderService } from '../serviceprovider.service';

@Component({
  selector: 'app-sp-vehicle-request',
  templateUrl: './sp-vehicle-request.component.html',
  styleUrls: ['./sp-vehicle-request.component.css']
})
export class SpVehicleRequestComponent{

  constructor(public spservice:ServiceproviderService){}
  public allVehicles:any[]=[]
  public reqData:any={}

  ngOnInit(): void
  {
    this.reqData=this.spservice.singleRequest
    const response =this.spservice.availableVehicles(this.spservice.singleRequest.vehicleRequestId);
    if(response!=null)
    {
      response.subscribe((res:any)=>{
        if (res.status)
        {
          this.allVehicles=res.data;
        }
        else {
          console.log(res.message);
        }
      })
    }
    else {
      console.log("Response is null")
    }
  }

}
