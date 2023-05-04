import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Psicologo } from '../models/psicologo';
import { Usuario } from '../models/usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class PsicologosService {
  url = environment.base + '/psicologos'
  constructor(private http: HttpClient, private usuariosService: UsuariosService) { }

  getPsicologos(){
    return this.http.get<Psicologo[]>(this.url)
  }
  getPsicologo(id: number){
    return this.http.get<Psicologo>(this.url + '/' + id)
  }
  updatePsicologo(psicologo: Psicologo){
    return this.http.put<Psicologo>(this.url + '/' + psicologo.id, psicologo)
  }

}
