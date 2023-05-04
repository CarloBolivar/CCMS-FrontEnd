import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HorarioComponent } from './components/horario/horario.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { HomePacienteComponent } from './components/home-paciente/home-paciente.component';
import { HomePsicologoComponent } from './components/home-psicologo/home-psicologo.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { VerperfilpsicologoComponent } from './components/verperfilpsicologo/verperfilpsicologo.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HorarioComponent,
    LoginComponent,
    HomePacienteComponent,
    HomePsicologoComponent,
    AgendarComponent,
    VerperfilpsicologoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
