import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Observable } from 'rxjs';
import { Call } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public show: String = '';
  public otpStatus: boolean = false;
  public ob: any;
  public isalert: boolean = false;
  public ismail: boolean = false;
  public checkMail:String = '';

  @ViewChild('b1') b1Element!: ElementRef;

  public constructor(
    public http: HttpClient,
    public router: Router,
    public userService: UserServiceService
  ) {
    this.show = 'login';
  }
  ngOnInit(): void {
    //counter()
    // contentWayPoint();
    this.show = 'login';
  }

  public login: any = {
    email: '',
    password: ''
  }

  public otp:any={
    email:'',
    otp:''
  }

  public loginInfo: any = {
    status: false,
    token: '',
    role: ''
  }


  public response: any = {
    status: false,
    message: '',
    data: null,
    error: null,
  };

  public regCus: any = {
    customerName: '',
    mobile: '',
    email: '',
    password: '',
  };

  public regSerpro: any = {
    email: '',
    password: '',
    serviceProviderName: ' ',
    serviceProviderAddress: '',
    serviceProviderMobile: '',
    serviceProviderType: '',
    rating: 4.5,
  };

  changeOtpStatus(data:any): void {
    if(data.email != null)
      {
       this.ob = this.userService.checkMail(data);
       this.ob.subscribe((res:any)=>{
        
        this.ismail = res.status;
        this.checkMail = res.message;
        if(this.ismail)
          {
            this.otpStatus=true;
          }
          else{
               this.otpStatus =false;
          }
      });
      }
  }

  public otpVerify(data:any)
  {
    
      this.userService.forgotemail = data.email;
      this.ob =this.userService.verifyOtp(data);

      this.ob.subscribe((data:any)=>{ 
        if(data.status)
          {
            this.changeModule('confirmPass');
          }
      })
  }

  public setPass(data:any)
  {
      
      data.email = this.userService.forgotemail;
     this.ob= this.userService.setPass(data);

     this.ob.subscribe((data:any)=>{
      if(data.status)
        {
          this.changeModule('login');
        }
     })
  }

  changeModule(change: String): void {
    this.show = change;
  }



  public setRegCus(data: any): void {

    this.regCus = data;
    this.ob = this.userService.saveCus(this.regCus);
    if (this.ob != null) {
      this.ob.subscribe((responseData: any) => {
        if (responseData.status) {

          this.response = responseData;
          alert("Customer Saved Succesfully")
          this.show = 'login';
          this.router.navigateByUrl('/login');
        } else {
          console.log(this.response.message);
        }
      });
    } else {
      console.log("Observable is null")
    }
  }

  public setRegSerPro(data: any, event: any): void {
    this.regSerpro = data;
    this.ob = this.userService.saveSer(this.regSerpro);
    if (this.ob != null) {
      this.ob.subscribe((responseData: any) => {
        if (responseData.status) {

          this.response = responseData;
          alert("Service Provider Saved Succesfully")
          this.show = 'login';
          this.router.navigateByUrl('/login');
        } else {
          console.log(this.response.message);
        }
      });
    } else {
      console.log("Observable is null")
    }
  }


  public loginCall(data: any): void {
    this.login.email = data.email;
    this.login.password = data.password;
    
    if (this.login.email != null && this.login.password != null) {
      this.isalert=false;
      
      this.ob = this.userService.login(this.login);
      
      if (this.ob != null) 
        {
        this.ob.subscribe((data: any) => {
          this.loginInfo.status = data.status;
          this.loginInfo.token = data.data.token;
          this.loginInfo.role = data.data.role;
          if (this.loginInfo.status) {
             
            this.userService.userInfo = this.loginInfo;
          }
          else {
              this.b1Element.nativeElement.innerText = 'Login Failed ';
          }

        })
      }
    }
    else {
      console.log("else called");
       /* this.isalert=true;
       this.b1Element.nativeElement.innerText = 'Enter Credentials ';   */
    }
  }


}
