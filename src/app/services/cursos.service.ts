import {Injectable} from "@angular/core";
import {Cursos} from "../models/cursos"
@Injectable()

export class CursosService{
    public listaCursos: Array<Cursos> =[];
    public curso1 : Cursos;
    public curso2: Cursos;
    constructor(){
    this.curso1 = new Cursos("Matemática", "2020-08-08",50);
    this.curso2 = new Cursos("Ingles", "2020-09-22", 20);
    this.listaCursos.push(this.curso1);
    this.listaCursos.push(this.curso2);
    }
    getCursos(){
        return this.listaCursos;
    }
}