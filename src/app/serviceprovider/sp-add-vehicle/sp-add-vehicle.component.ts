import { Component, OnInit } from '@angular/core';
import { ServiceproviderService } from '../serviceprovider.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';

@Component({
  selector: 'app-sp-add-vehicle',
  templateUrl: './sp-add-vehicle.component.html',
  styleUrls: ['./sp-add-vehicle.component.css']
})
export class SpAddVehicleComponent implements OnInit
{

  constructor(public spService:ServiceproviderService,public router:Router,private formBuilder: FormBuilder, public masterVehicleService:MasterVehicleServiceService){}

  selectedImages:any[] = [{path:undefined},{path:undefined},{path:undefined},{path:undefined}]
  spVehicle:any = undefined;
  showForm: boolean = false;
  selectedFile: File | null = null;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  public masterVehicle:any = undefined
  public msg:String = "";
  public imgMsg:String = "";
  public setDisable:boolean = false;
  public addVehicleFormEvent:any = undefined

  ngOnInit(): void {
      this.masterVehicle = this.masterVehicleService.singleVehicle;
      console.log(this.masterVehicleService.singleVehicle)
  }

  public addVehicle(data:any, event:any, rccd:any):void{
    console.log(data)
    if(data!=null){
      data.vehicleMasterId = this.masterVehicle.vehicleMasterId;
      const response = this.spService.saveMasterVehicle(data, rccd.files[0]);
      response.subscribe((res:any)=>{
        if(res != null){
          if(res.status == true && res.message == "Vehicle Saved successfully"){
            this.spVehicle = res.data;
            this.setDisable = true;
            this.addVehicleFormEvent = event;
            this.toggleForm();
            this.msg = res.message;
          }
          else if(res.status == false && res.message == "Charges Not Defined"){
            this.msg = res.message
          }
          else{
            this.msg = res.message;
            console.log("yha aaya")
          }
        }
        else{
          this.msg = "Api Called Error"
        }
      })
    }
  }
 
  public onImgSelect(event:any,i:any){
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    console.log(imageUrl)
    this.selectedImages[i].path = event.target.files[0];
    const img = document.getElementById(i) as HTMLImageElement;
    img.src = imageUrl;
  }

  public uploadImages(data:any):void{
    const response = this.spService.uploadVehicleImages(this.selectedImages,this.spVehicle.spVehicleId)
    response.subscribe((res:any)=>{
      if(res!= null){
        this.imgMsg = res.message;
        this.setDisable = false;
        this.addVehicleFormEvent.target.reset();
        data.target.reset();
      }
    })
  }
}
