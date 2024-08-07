import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
  import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-add-vehicle-master',
  templateUrl: './add-vehicle-master.component.html',
  styleUrls: ['./add-vehicle-master.component.css']
})
export class AddVehicleMasterComponent {
  
    public response: any = {
      status: false,
      message: '',
      data: null,
      error: null,
    };
    public vehicleImage: File | null = null; 
    public showVehicleCapacity = false;
    public showseat = true;
    
    ob:any;
    constructor(public userSevice:UserServiceService, public router: Router)
    {
  
    }
   
   public setMasterVehicle(data:any,event:any) :void
   {
    
  
    const formData = new FormData();
    formData.append('vehicleModel', data.vehicleModel);
    formData.append('vehicleType', data.vehicleType);
    
    console.log(data.seats);
    console.log(data.vehicleCapacity);
    
    if(data.seats == undefined){
        formData.append('seats','0');}
    else{
        formData.append('seats',data.seats);
      }
      if(data.vehicleCapacity == undefined){
          formData.append('vehicleCapacity','0');}
      else
      {
        formData.append('vehicleCapacity', data.vehicleCapacity);
      }
    if (this.vehicleImage) {
      formData.append('file', this.vehicleImage);
    }
  
    this.ob = this.userSevice.masterVehicle(formData);
    console.log(this.ob)
    if (this.ob != null) {
      this.ob.subscribe((responseData: any) => {
        if (responseData.status) {
  
          this.response = responseData;
          console.log(this.response.message);
          alert("Vehicle Saved Succesfully")
         event.target.reset();
          this.router.navigateByUrl('/MasterVehicle');
        } else {
          console.log(this.response.message);
        }
      });
    } else {
      console.log("Observable is null")
    }
   }
  
   onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.vehicleImage = event.target.files[0];
    }
  }
  
  onVehicleTypeChange(event: any) {
    this.showVehicleCapacity = event.target.value == 'transport';
    this.showseat = event.target.value == 'rental';
    
  }
    
  

}
