import { Component, OnInit } from '@angular/core';
import { ServiceproviderService } from '../serviceprovider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sp-all-vehicles',
  templateUrl: './sp-all-vehicles.component.html',
  styleUrls: ['./sp-all-vehicles.component.css']
})
export class SpAllVehiclesComponent implements OnInit
{
  constructor(public spservice:ServiceproviderService, public router:Router)
  {}

  public spVehicles:any[] = this.spservice.spAllVehicles;
  public msg = "";
  public records:any[] = [];
  public page:number = 1;
  public skipValue:number = 5;
  public totalRecord:number = 0;
  public showPopup: boolean = false;
  public spvid:number = 0;

  ngOnInit(): void {
     this.viewAllVehicles(this.page,this.skipValue);
  }
  
  public viewAllVehicles(page:any, size:any):void {
      const response = this.spservice.getAllSpVehicle(page,size);
      if(response != null){
        response.subscribe((res:any)=>{
          if(res.status){
            this.spservice.spAllVehicles = res.data.list;
            this.totalRecord = res.data.count;
            this.spVehicles = this.spservice.spAllVehicles;
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

  public showDeletePopup(spvId:any):void
  {
    this.showPopup = true;
    this.spvid = spvId;
  }

  public deleteVehicle():void {
    const response = this.spservice.deleteVehicle(this.spvid);
    if(response!=null)
    {
      response.subscribe((res:any)=>{
        if(res.status)
        {
            this.spservice.spAllVehicles.length = 0;
            this.viewAllVehicles(this.page,this.skipValue);
        }
        else{
          this.msg = res.message;
        }
      })
    }
    else{
      console.log("Response is null")
    }
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
    this.viewAllVehicles(this.page,this.skipValue)
  }

  closePopup(): void {
    this.showPopup = false;
  }
 
}
