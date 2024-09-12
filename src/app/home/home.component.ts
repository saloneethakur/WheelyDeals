import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
import { Observable, debounceTime, map, of, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cities: string[] = [];
  source: string[] = [];
  destination: string[] = [];
  pickupValue: string = '';
  dropoffValue: string = '';
  status: boolean = false;
  private changeTimer: any;

  constructor(public tripService: TripService, public router: Router, public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCities().subscribe((response: any) => {
      this.cities = response.geonames.map((city: any) => city.name);
    });
  }

  onPickupChange(value: string): void {
    if (this.changeTimer) {
      clearTimeout(this.changeTimer);
    }
    this.changeTimer = setTimeout(() => {
      this.filterCities(value, 'source');
      this.status = true;
    }, 200);
  }

  onDropOffChange(value: string): void {
    if (this.changeTimer) {
      clearTimeout(this.changeTimer);
    }
    this.changeTimer = setTimeout(() => {
      this.filterCities(value, 'destination');
      this.status = true;
    }, 200);
  }

  private filterCities(value: string, place: any): void {

    const filterValue = value.toLowerCase();
    if (this.status) {
      if (place == "source") {
        this.source = this.cities.filter(city =>
          city.toLowerCase().includes(filterValue)
        );
      }
      else {
        this.destination = this.cities.filter(city =>
          city.toLowerCase().includes(filterValue)
        );
      }
    }
  }

  selectPickup(city: string): void {
    this.pickupValue = city
    this.status = false;
    this.source = []
  }

  selectDrop(city: string): void {
    this.dropoffValue = city;
    this.status = false;
    this.destination = []
  }

  public tripData(data: any): void {
    this.tripService.tripObject = data;
    this.router.navigateByUrl('/allMasterVehicle')
  }
}
