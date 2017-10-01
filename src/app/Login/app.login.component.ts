import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UserModel} from "../Models/UserModel";
import {httpServices} from "../Services/app.httpServices";

@Component({
 selector: 'login',
 templateUrl: 'login.html',
 styleUrls:['../../myStyle.scss'],
 providers:[httpServices]
})

export class LoginComponent implements OnInit {

 constructor(private _httpService:httpServices,
             private router: Router ) {
  this.loginUser=new UserModel();
 }

 title="Login Page";
 loginUser:UserModel;
  error={state:false,message:""}

 ngOnInit() { }

 login(form:NgForm){
   console.log(form);
  if(this.loginUser.userName && this.loginUser.password){
   this._httpService.loginService(this.loginUser)
       .subscribe(
           data=>{
            console.log(data)
            let res=JSON.parse(JSON.stringify(data));
            if(res.control==="Ok"){
              localStorage.setItem('currentUser', JSON.stringify(res.user));
              localStorage.setItem('sessionID', JSON.stringify(res.sessionID));
              this.router.navigate(['/main'])
            }
             else
            {
              this.error.state=true;
              this.error.message=res.control;
            }

           },
            error=>console.log(error),
            ()=>"Finished"
       )
  }
 }
}
