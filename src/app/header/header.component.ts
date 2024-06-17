import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

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
  public constructor(public userService:UserServiceService)
  {
    console.log(userService.info.isLogin)
    console.log(userService.info.role)
    
    this.role=userService.info.role;
    this.isLogin=userService.info.isLogin;
  }

}
