import { Component, OnInit } from '@angular/core';
import {AjaxPeticiones} from '../services/ajax.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [AjaxPeticiones]
})
export class UsuariosComponent implements OnInit {
  public user : any;
  public idUsr: any;
  public cadHttp: any;
  constructor(
    public _peticiones : AjaxPeticiones

  ) {
    this._peticiones.setIdUser(3);
   /* this.idUsr=2
   this._peticiones.idUser=this.idUsr;*/
   
   //this.cadHttp = this._peticiones.getUser + this.idUsr;
   
   console.log(this._peticiones.getUser);
   }

  ngOnInit(): void {
   
   /* this._peticiones.getUser().subscribe(
      (result:any) => {
        this.user = result.data;
      },
      error =>{
        console.log(<any>error)
      }
    );*/
  }
  ngDoCheck(){
    console.log(this._peticiones.idUser);
    
    
  }
  nuevaBusqueda(){
    this._peticiones.setIdUser(this.idUsr);
    this._peticiones.getUser;
  }
}
