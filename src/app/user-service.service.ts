
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  
 constructor(public http:HttpClient, public router:Router ) { }
 
  public info:any =
  {
      isLogin :false,
      token:undefined,
      role:''
  }
  public femail:String='';
  public get forgotemail(){return this.femail};
  
  public set forgotemail(email:String){
    this.femail = email;
  };


  public get isLogin(){return this.info.isLogin};
  public get token(){return this.info.token};
public get role(){return this.info.role};
  public saveSer(regSerpro:any):any
  {
    return this.http.post("http://localhost:8080/web/saveServiceProvider",regSerpro)
  }

  public saveCus(regCus:any):any
  {
    return this.http.post("http://localhost:8080/web/saveCustomer",regCus)
  }

  public login(loginData:any):any
  {
      return this.http.post('http://localhost:8080/web/login',loginData)
  }

  public masterVehicle(MasterVehicle:any):any
  {
    const authorize = this.getHeaders();
       return this.http.post('http://localhost:8080/admin/addMasterVehicle',MasterVehicle,{ headers: authorize })
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }
 
  public set userInfo(ob:any)
  {
    
      this.info.isLogin=ob.status;
      this.info.token=ob.token;
      this.info.role = ob.role;
    if(this.info.role=='ROLE_CUSTOMER')
      {  
        this.router.navigateByUrl("/");
      }
      else if(this.info.role=='ROLE_ADMIN')
        {
          this.router.navigateByUrl("MasterVehicle");
        }
       else  if(this.info.role=='ROLE_SERVICEPROVIDER')
          {
            this.router.navigateByUrl("/serviceProvider");
          }
     
    
  }
  
  public checkMail(data:any):any{
    return this.http.post('http://localhost:8080/web/forget_pass',data);
  }

  public getCustomer():any 
  {
    const authorize = this.getHeaders();
    return this.http.get("http://localhost:8080/admin/viewAllCustomer",{headers:authorize})
  }

  getServiceProvider(): any {
    const authorize = this.getHeaders();
    return this.http.get("http://localhost:8080/admin/viewAllServiceProvider",{headers:authorize})
  }
 

  changeBlock(id: any) 
  {
    const authorize = this.getHeaders();
      return this.http.patch(`http://localhost:8080/admin/blockUser/${id}`,{},{headers:authorize});
  }

  public verifyOtp(data:any)
  {
      return this.http.post('http://localhost:8080/web/verifyOtp',data);
  }

  setPass(data: any) 
  {
    return this.http.patch('http://localhost:8080/web/changePass',data);
  }
}
