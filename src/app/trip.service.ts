import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  private tripData:any = undefined;
  private tempTripData:any = undefined;

  public get tempTripObj(){return this.tempTripData}
  public set tempTripObj(temp:void){this.tempTripData = temp}

  public get tripObject(){return this.tripData}
  public set tripObject(tripData:any){this.tripData = tripData}

}
