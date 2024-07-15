import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer-service.service';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit
{
  public obj:any[]=[];
  public response:any;

  public constructor(public userService:UserServiceService,public router:Router,public cusService:CustomerService){}

  public ngOnInit(): void 
  {
    this.response =  this.cusService.getCustomer();
    this.response.subscribe((resData:any)=>
      {
          console.log(resData.data);
          if(resData.status=true)
            this.cusService.cusOb=resData.data;
          {    this.obj=this.cusService.cusOb;
            console.log(this.obj);
          }
    })
  }

  public blockStatus(id:any):void
  {
    if(confirm("Are you sure to change the Block status")==true)
      {
    this.response=  this.userService.changeBlock(id);
  
    this.response.subscribe((object:any)=>
    {
      console.log(object.message);
      const user = this.obj.find(user => user.userId === id);
      if (user) {
        user.isblock = !user.isblock;
      }
      this.router.navigateByUrl("/adminCustomer")
    })
  }
  else
  {
    this.router.navigateByUrl('/adminCustomer')
  }
  }
}
