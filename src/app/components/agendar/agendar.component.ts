import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Psicologo } from 'src/app/models/psicologo';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { PsicologosService } from 'src/app/services/psicologos.service';

import { MatTableDataSource } from '@angular/material/table'
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { UsuarioPsicologo } from 'src/app/models/usuariopsicologo';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent {

  usuarioPsicologo: UsuarioPsicologo[] = [];

  dataSource = new MatTableDataSource <UsuarioPsicologo>();

  displayedColumns: string[] = [
    "id",
    "nombre",
    "apellido",
    "tarifa",
    "especialidad",
    "credencial",
    "verPerfil"]

  constructor (private psicologosService:PsicologosService, 
    private usuariosService: UsuariosService,
    private router: Router) {}

  ngOnInit() {
    this.CargaPsicologos();
  }

  
  CargaPsicologos(): void {
    this.psicologosService.getPsicologos().subscribe({
      next: (data: Psicologo[]) => {
        data.forEach ( x => {
          this.usuariosService.getUsuario(x.idUsuario)
          .subscribe (
            (user: Usuario) => {
              const psicologo: UsuarioPsicologo = {
                id: x.id,
                credencial: x.credencial,
                tarifa: x.tarifa,
                especialidad: x.especialidad,
                nombre: user.nombre,
                apellido: user.apellido
              }
              this.usuarioPsicologo.push(psicologo)
              if(this.usuarioPsicologo.length === data.length) {
                this.dataSource = new MatTableDataSource(this.usuarioPsicologo);
              }
            }
          )
        })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  /*
  perfilPsicologo(id: number) {
    this.router.navigate(['verperfilpsicologo/'+id]);
  }*/
}
