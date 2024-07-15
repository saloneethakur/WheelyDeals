import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterVehicleServiceService {
  private masterVehiclesData:any[] = []
  private singleVeh:any= undefined

  constructor() { }
  public get masterVehicles(){return this.masterVehiclesData;}
  public get singleVehicle(){return this.singleVeh;}

  public set masterVehicles(masterData:any){this.masterVehiclesData=masterData;}
  public set singleVehicle(singlev:any){this.singleVeh = singlev}
}
