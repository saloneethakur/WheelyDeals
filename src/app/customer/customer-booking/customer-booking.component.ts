import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css']
})
export class CustomerBookingComponent implements OnInit{
  ngOnInit(): void {
    tabsView();
  }

}
