import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxPeticiones {
    public url : string;
    constructor(
        public _http : HttpClient
    ){
        this.url = "https://reqres.in/"
    }
    getUser(){
        console.log(this._http.get(this.url+"api/users/2"));
        return this._http.get(this.url+"api/users/2");
    }
}