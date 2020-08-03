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
  constructor(
    public _peticiones : AjaxPeticiones

  ) { }

  ngOnInit(): void {
    console.log(this._peticiones.getUser);
   /* this._peticiones.getUser().subscribe(
      (result:any) => {
        this.user = result.data;
      },
      error =>{
        console.log(<any>error)
      }
    );*/
  }

}
