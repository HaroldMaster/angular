import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxPeticiones {
    public url : string;
    public getUser : any; 
    public idUser : any;
    constructor(
        public _http : HttpClient
    ){
        
        
    }
    ngOnInit(){
        this.url = "https://reqres.in/";
        this.getUser = this._http.get(this.url+'api/users/'+this.idUser);
    }
    
    
}