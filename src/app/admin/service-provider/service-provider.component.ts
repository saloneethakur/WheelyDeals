import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent {
  
  public obj:any[]=[];
  public response:any;

  public constructor(public userService:UserServiceService,public router:Router){}

  public ngOnInit(): void 
  {
    this.response =  this.userService.getServiceProvider();
    this.response.subscribe((resData:any)=>
      {
          console.log(resData.data);
          if(resData.status=true)
          {    this.obj=resData.data;
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
      this.router.navigateByUrl("/adminService")
    })
  }
  else
  {
    this.router.navigateByUrl('/adminService')
  }
  }

}
