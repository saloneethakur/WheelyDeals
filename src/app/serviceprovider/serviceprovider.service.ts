import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MasterVehicleServiceService } from 'src/app/master-vehicle-service.service';
import { UserServiceService } from 'src/app/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

  private allSpVehicles:any[]=[];

  public get spAllVehicles(){return this.allSpVehicles}

  public set spAllVehicles(spAllVehicles:any){this.allSpVehicles=spAllVehicles}

  constructor(public http:HttpClient, public userService:UserServiceService, public masterVehicleService:MasterVehicleServiceService) {} 

  public getMasterVehicle():any{
    const authorize = this.userService.getHeaders();
    return this.http.get("http://localhost:8080/web/allVehicles",{headers:authorize})
  }

  public saveMasterVehicle(data:any,selectedFile: File):any{
    const authorize = this.userService.getHeaders();
    const formData = new FormData();
    formData.append('file',selectedFile);
    formData.append('vehicleMasterId',data.vehicleMasterId);
    formData.append('registrationNumber',data.registrationNumber);
    formData.append('fuelType',data.fuelType);
    console.log(formData);
    return this.http.post("http://localhost:8080/serviceProvider/addVehicle",formData,{headers:authorize})
  }
  
  public uploadVehicleImages(imgData:any,spVehicleId:any){
    const authorize = this.userService.getHeaders();
    const formData = new FormData();
    for(let i=0; i<imgData.length; i++){
      formData.append('files',imgData[i].path);
    }
    return this.http.post(`http://localhost:8080/serviceProvider/addVehicleImages/${spVehicleId}`,formData,{headers:authorize})
  }

  public getAllSpVehicle(page:any,size:any){
    const authorize = this.userService.getHeaders();
    return this.http.get(`http://localhost:8080/serviceProvider/viewVehicles?page=${page}&size=${size}`,{headers:authorize})
  }

  public viewCharges(){
    const authorize = this.userService.getHeaders();
    console.log(this.masterVehicleService.singleVehicle)
    return this.http.get(`http://localhost:8080/serviceProvider/viewCharges/${this.masterVehicleService.singleVehicle.vehicleMasterId}`,{headers:authorize})
  }

  public addCharges(data:any):any
  {
    const authorize = this.userService.getHeaders();
    return this.http.post("http://localhost:8080/serviceProvider/addCharges",data,{headers:authorize})
  }

  public updateCharges(data:any, chargesId:any):any
  {
    const authorize = this.userService.getHeaders();
    return this.http.patch(`http://localhost:8080/serviceProvider/updateCharges/${chargesId}`,data,{headers:authorize})
  }

  public deleteVehicle(spvid:any):any
  {
    const authorize = this.userService.getHeaders();
    return this.http.delete(`http://localhost:8080/serviceProvider/deleteVehicle/${spvid}`,{headers:authorize})
  }

}

