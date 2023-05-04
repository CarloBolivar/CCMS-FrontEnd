import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  url = environment.base + '/citas'
  constructor(private http: HttpClient) { }
  getCitas(){
    return this.http.get<Cita[]>(this.url)
  }
  getCita(id: number){
    return this.http.get<Cita>(this.url + '/' + id)
  }
  updateCita(cita: Cita){
    return this.http.put<Cita>(this.url + '/' + cita.id, cita)
  }
  addCita(cita: Cita){
    return this.http.post<Cita>(this.url, cita)
  }
}
