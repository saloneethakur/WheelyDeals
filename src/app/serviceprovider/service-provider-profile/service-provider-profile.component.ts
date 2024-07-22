import { Component } from '@angular/core';
import { ServiceproviderService } from '../serviceprovider.service';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.css']
})
export class ServiceProviderProfileComponent{
  constructor(public spService:ServiceproviderService){}

  public spProfile:any = undefined;

  ngOnInit():void{
    tabsView()
    this.storeSpProfile();
  }

  public storeSpProfile():void{
    this.spProfile = this.spService.serviceProviderProfile;
  } 
}
