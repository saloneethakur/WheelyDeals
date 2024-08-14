import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceproviderService } from '../serviceprovider.service';

@Component({
  selector: 'app-sp-request',
  templateUrl: './sp-request.component.html',
  styleUrls: ['./sp-request.component.css']
})
export class SpRequestComponent implements OnInit{

  constructor(public router:Router, public spservice:ServiceproviderService){}
  public requests:any[]=[];

  ngOnInit(): void {
    this.viewAllRequests();
  }

  public viewAllRequests()
  {
    const response = this.spservice.viewRequests();
    if (response != null) {
      response.subscribe((res: any) => {
        if (res.status) {
          this.requests = res.data;
        }
        else {
          console.log(res.message);
        }
      })
    }
    else {
      console.log("Response is null")
    }
  }

  public viewSingleRequest(req:any)
  {
    this.spservice.singleRequest = req;
    this.router.navigateByUrl('/spVehicleRequest');
  }
}
