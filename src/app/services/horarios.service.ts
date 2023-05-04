import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Horario } from '../models/horario';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  url = environment.base + '/horarios'
  constructor(private http: HttpClient) { }
  getHorarios(){
    return this.http.get<Horario[]>(this.url)
  }
  getHorario(id: number){
    return this.http.get<Horario>(this.url + '/' + id)
  }
  updateHorario(horario: Horario){
    return this.http.put<Horario>(this.url + '/' + horario.id, horario)
  }
}
