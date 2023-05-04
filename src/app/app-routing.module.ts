import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorarioComponent } from './components/horario/horario.component';
import { LoginComponent } from './components/login/login.component';
import { HomePacienteComponent } from './components/home-paciente/home-paciente.component';
import { HomePsicologoComponent } from './components/home-psicologo/home-psicologo.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { VerperfilpsicologoComponent } from './components/verperfilpsicologo/verperfilpsicologo.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'horario', component: HorarioComponent },
  { path: 'home-paciente', component: HomePacienteComponent },
  { path: 'home-psicologo', component: HomePsicologoComponent },
  { path: 'agendar', component: AgendarComponent },
  { path: 'verperfilpsicologo/:id', component: VerperfilpsicologoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
