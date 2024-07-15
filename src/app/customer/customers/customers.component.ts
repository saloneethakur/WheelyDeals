import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/customer-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  public constructor(public cusService:CustomerService,private route: ActivatedRoute){}

  public userId:any='';
  public status: boolean = true

  public obj:any;
  ngOnInit(): void 
  {
    tabsView();
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
    this.loadCustomerDetails();
  }
  
  public loadCustomerDetails() 
  {
    
    console.log(this.obj);
     const user = this.cusService.cusOb.find(use => use.userId == this.userId);
      this.obj= (user);
     console.log(this.obj);
    console.log( typeof(this.obj));
  }
 
}
