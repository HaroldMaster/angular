import { Component, OnInit } from '@angular/core';
import  {Cursos} from './../models/cursos'
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute, Params} from '@angular/router'
import {CursosService} from "../services/cursos.service"

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {
  public listaCursos: Array<Cursos> =[];
  public nuevoNombre: string;
  public nuevaFecha: string;
  public nuevoValor: number;
  public nombreParametro : string;
  public fechaParametro: string;
  public valorParametro: number;

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _cursosservice : CursosService
  ) { 
    this.nuevoNombre="Geometria"
  }
  
  anadirCurso(){
    this.listaCursos.push(new Cursos(this.nuevoNombre,this.nuevaFecha,this.nuevoValor));
  }
  anadirCursoPath(){
    if(this.nombreParametro != undefined){
    this.listaCursos.push(new Cursos(this.nombreParametro,this.fechaParametro,this.valorParametro));
    }
  }
  
  
  ngOnInit(): void {
    this.listaCursos=this._cursosservice.getCursos();
    this._route.params.subscribe((params: Params)=>{
      this.nombreParametro = params.nombre;
      this.fechaParametro =  params.fecha;
      this.valorParametro = +params.valor;
    });
    console.log(this.nombreParametro);
    this.anadirCursoPath();
  }


}
