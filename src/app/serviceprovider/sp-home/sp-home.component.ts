import { Component, OnInit } from '@angular/core';
import { ServiceproviderService } from '../serviceprovider.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';

@Component({
  selector: 'app-sp-home',
  templateUrl: './sp-home.component.html',
  styleUrls: ['./sp-home.component.css']
})
export class SpHomeComponent implements OnInit
{
  constructor(public spService:ServiceproviderService,public router:Router,public masterVehicleService:MasterVehicleServiceService){}

  selectedFile: File | null = null;
  public v:any = undefined;
  public masterVehicle:any[] =[]
  public msg:String = "";
  showPopup: boolean = false;

  ngOnInit(): void {
    if(this.masterVehicleService.masterVehicles.length == 0){
      const response = this.spService.getMasterVehicle()
      if(response != null){
        response.subscribe((res:any)=>{
          if(res.status == true){
              this.masterVehicle = res.data;
          }
          else{
              this.msg = res.message;
          }
        })
      }
    }
    else{
      this.masterVehicle = this.masterVehicleService.masterVehicles;
      console.log(this.masterVehicle)
    }
  }

  closePopup(): void {
    this.showPopup = false;
  }

  public addVehicle(data:any, event:any):void{
    console.log(data)
    this.masterVehicleService.singleVehicle = data.vehicleMasterId
    data.vehicleMasterId = data.vehicleMasterId.vehicleMasterId
    if(data!=null && this.selectedFile != null){
      const response = this.spService.saveMasterVehicle(data, this.selectedFile);
      response.subscribe((res:any)=>{
        if(res != null){
          if(res.status == true && res.message == "Vehicle Saved successfully"){
            this.msg = res.message;
            this.router.navigateByUrl('/vehicle')
            event.target.reset();
          }
          else if(res.message === "Charges Not Defined"){
            this.msg = res.message
              this.showPopup = true;
            
            setTimeout(() => {
              this.router.navigateByUrl('/vehiclecharges');
            }, 5000);
            
            console.log(res.message)
          }
          else{
            this.msg = res.message;
          }
        }
        else{
          this.msg = "Api Called Error"
        }
      }
      )
    }
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
}
