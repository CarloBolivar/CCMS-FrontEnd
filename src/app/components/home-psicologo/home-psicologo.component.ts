import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home-psicologo',
  templateUrl: './home-psicologo.component.html',
  styleUrls: ['./home-psicologo.component.css']
})
export class HomePsicologoComponent {

  constructor(
    private router: Router){}

  disponibilidad() {
    this.router.navigate(['horario']);
  }

}
