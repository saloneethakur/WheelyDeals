import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
 
  ngOnInit(): void {
    
  }
  public role:any=''
  public isLogin:any=false;
  public constructor(public userService:UserServiceService,public router:Router)
  {
    console.log(userService.info.isLogin)
    console.log(userService.info.role)
    
    this.role=userService.info.role;
    this.isLogin=userService.info.isLogin;
  }

  public logout():any
  { 
      this.userService.info.isLogin=false;
      this.userService.info.token=undefined;
      this.userService.info.role=" ";

      this.router.navigateByUrl('/login')
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
