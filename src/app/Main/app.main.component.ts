import { Component, OnInit } from '@angular/core';
import {UserModel} from "../Models/UserModel";
import {httpServices} from "../Services/app.httpServices";

@Component({
 selector: 'main',
 templateUrl: 'main.html',
 styleUrls:['../../myStyle.scss'],
 providers:[httpServices]
})

export class MainComponent implements OnInit {

 sessionID:string="";
 currentUser:any;
 users:Array<UserModel>=[];
 constructor(private _httpService:httpServices) {
  this.sessionID=JSON.parse(localStorage.getItem('sessionID'));
  this.currentUser=JSON.parse(localStorage.getItem('currentUser'))
  console.log(this.currentUser);
  this.getUsers();
 }

 Title:string="Wellcome..."
 ngOnInit() { }

 getUsers(){
  this._httpService.getUsers().subscribe(
      data=>{
       console.log(data);
       if(data.control==="Ok")
        this.users=data.users
      },
      error=>console.log(error),
      ()=>"finished"
  )
 }
}