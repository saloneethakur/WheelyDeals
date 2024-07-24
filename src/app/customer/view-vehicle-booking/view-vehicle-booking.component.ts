import { Component } from '@angular/core';

@Component({
  selector: 'app-view-vehicle-booking',
  templateUrl: './view-vehicle-booking.component.html',
  styleUrls: ['./view-vehicle-booking.component.css']
})
export class ViewVehicleBookingComponent {
  ngOnInit(): void {
    tabsView();
  }
}
