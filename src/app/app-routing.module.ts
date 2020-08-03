import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { from } from 'rxjs';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:"cursos", component: CursosComponent },
  {path:"cabecera", component: CabeceraComponent},
  {path: "cursos/:nombre/:fecha/:valor", component: CursosComponent},
  {path: "usuarios", component: UsuariosComponent},
  {path: "**", component: CursosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
