import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.css']
})
export class HomePacienteComponent {

  constructor(
    private router: Router){}

  agendar() {
    this.router.navigate(['agendar']);
  }
}
