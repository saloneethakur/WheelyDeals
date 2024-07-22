import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  constructor(public tripService:TripService, public router:Router){}

  ngOnInit(): void {
    
  }

  public tripData(data:any):void{
    this.tripService.tripObject = data;
    this.router.navigateByUrl('/allMasterVehicle')
  }
}
