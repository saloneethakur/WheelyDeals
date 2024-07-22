import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  
  constructor(public http:HttpClient,public userService:UserServiceService) { }

  public vehOb:any[]=[];
  private spVehicle:any = undefined;

  public get viewSpVehicle(){return this.spVehicle}

  public set viewSpVehicle(spv:any){this.spVehicle = spv}

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.userService.token}`
    });
  }

  allMasterVehicle():any 
  {
    const authorize = this.getHeaders();
    return this.http.get("http://localhost:8080/web/allVehicles",{headers : authorize});
  }

  public getVehiclesByMasterVehicle(id:any):any
  {
    const authorize = this.getHeaders();
    return this.http.get(`http://localhost:8080/admin/spVehiclesByMastervehicle/${id}`,{headers : authorize});
  }

}
