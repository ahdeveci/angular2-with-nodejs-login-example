import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {UserModel} from "../Models/UserModel";


@Injectable()

export class httpServices {

    constructor(private _http:Http){}

    host:string='http://localhost:1200';

    loginService(user:UserModel){

        let json=JSON.stringify(user);
        var params="data="+json;
        let headers_=new Headers();
        headers_.append('Content-Type','application/x-www-form-urlencoded');

        return this._http.post(this.host+'/loginCtrl', params,{headers:headers_})
            .map((response: Response) => {
                let users = response.json();
                return users;
            });
    }

    getUsers(){
        return this._http.get(this.host+'/getUsers',[{'Content-Type': 'application/x-www-form-urlencoded'}])
            .map(res=>res.json());
    }
}