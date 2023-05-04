import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Horario } from 'src/app/models/horario';
import { Psicologo } from 'src/app/models/psicologo';
import { Cita } from 'src/app/models/cita';
import { CitasService } from 'src/app/services/citas.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { LoginService } from 'src/app/services/login.service';
import { PsicologosService } from 'src/app/services/psicologos.service';

@Component({
  selector: 'app-verperfilpsicologo',
  templateUrl: './verperfilpsicologo.component.html',
  styleUrls: ['./verperfilpsicologo.component.css']
})
export class VerperfilpsicologoComponent {

  horarioSeleccionado!: Horario
  id!: number
  activo: boolean = false
  fecha: Date = new Date(Date.now())
  precioPsicologo: number = 0;
  horariosPsicologo!: Horario[]

  constructor(private route: ActivatedRoute,
    private psicologosService: PsicologosService,
    private horariosService: HorariosService,
    private loginService: LoginService, 
    private citasService: CitasService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  cargarHorarios(){
    this.activo = true;
    this.horariosService.getHorarios().subscribe(
      (horarios: Horario[]) => {
        this.psicologosService.getPsicologo(this.id).subscribe(
          (psicologo:Psicologo) => {
            this.horariosPsicologo == horarios.filter((x) => psicologo.id == x.idPsicologo
            && x.fecha.toString() == this.fecha.toLocaleDateString()
            && x.disponible == true)
          }
        )
      }
    )
  }

  agendarCita(){
      this.horarioSeleccionado.disponible = false;
      this.horariosService.updateHorario(this.horarioSeleccionado).subscribe(
        (hora: Horario) => console.log(hora)
      )
      const cita: Cita = {
        id: 0,
        idHorario: this.horarioSeleccionado.id,
        idUsuario: this.loginService.usuario.id
      }
      this.citasService.addCita(cita).subscribe(
        (cita: Cita) => console.log(cita))
  }
}
