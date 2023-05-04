import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Horario } from 'src/app/models/horario';
import { HorariosService } from 'src/app/services/horarios.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {
  selected : Date = new Date(Date.now());
  displayedColumns: string[] = ['hora', 'disponible'];
  dataSource =  new MatTableDataSource<Horario>();
  constructor(private horariosService: HorariosService, private loginService: LoginService){}
  ngOnInit(){
    this.actualizar();
  }

  actualizar(){
    this.horariosService.getHorarios().subscribe(
      (horarios: Horario[]) =>{
        horarios = horarios.filter((x) => {
          if(this.loginService.usuario && this.loginService.usuario.tipoUsuario == 'paciente'){
            return x.fecha.toString() == this.selected.toLocaleDateString(); 
          } 
          return x.fecha.toString() == this.selected.toLocaleDateString()
           && x.idPsicologo == this.loginService.usuario.id;
          
        }) 
        this.dataSource = new MatTableDataSource(horarios)
      }
    )
  }
  cambiarEstado(id: number, disponible: boolean){
    this.horariosService.getHorario(id).subscribe(
      (horario: Horario)=>{
        horario.disponible = disponible;
        this.horariosService.updateHorario(horario).subscribe(
          (hor : Horario) => this.actualizar()
        );
      }
    )
  }
  estado(disponible : boolean) {
    if(disponible == true){
      return "Activado";
    }
    return "Desactivado"
  }
}
