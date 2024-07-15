import { Component } from '@angular/core';
import { ServiceproviderService } from '../serviceprovider.service';
import { Router } from '@angular/router';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent{
  constructor(public spService:ServiceproviderService,public router:Router,public masterVehicleService:MasterVehicleServiceService){}

  public masterVehicle:any[] = []
  public records:any[] = [];
  public page:number = 1;
  public skipValue:number = 5;
  public totalRecord:number = 0;
  
  ngOnInit(): void {
    tabsView();
    this.viewMasterVehicles(this.page,this.skipValue);
  }

  public viewMasterVehicles(page:any, size:any):void {
    if(this.masterVehicleService.masterVehicles.length == 0){
      
      const response = this.spService.getMasterVehicle()
      if(response != null){
        response.subscribe((res:any)=>{
          if(res.status == true){
              this.masterVehicle = res.data;
          }
          else{
            console.log("Error")
          }
        })
      }
    }
    else{
      this.masterVehicle = this.masterVehicleService.masterVehicles;
      console.log(this.masterVehicle)
    }
  }

  public storeVehicle(vehicle:any):void{
      this.masterVehicleService.singleVehicle = vehicle;
      this.router.navigateByUrl('/spAddVehicle');
  }

  public updateCharges(vehicle:any):void{
    this.masterVehicleService.singleVehicle = vehicle;
    this.router.navigateByUrl('/vehiclecharges');
}

public getLinks(){
  const arr:number[] = [];
    for(let i=0; i< this.totalRecord/this.skipValue; i++){
      arr.push(i);
    }
  return arr;
}
public link(index:number){
  this.page = index;
  this.viewMasterVehicles(this.page,this.skipValue);
}

}
