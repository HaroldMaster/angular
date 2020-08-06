import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxPeticiones {
    public url : string = "https://reqres.in/";;
    public idUser : any = 3;
    public getUser : any = this._http.get(this.url+'api/users/'+this.idUser);; 
    
    constructor(
        public _http : HttpClient
    ){
        
        //this.idUser=2;
        
    }
    

    ngOnInit(){
        
    }
    setIdUser (userid){
        this.idUser=userid;
    }
    
}