import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = environment.base + '/usuarios'
  constructor(private http: HttpClient) { }
  getUsuarios(){
    return this.http.get<Usuario[]>(this.url)
  }
  getUsuario(id: number){
    return this.http.get<Usuario>(this.url + '/' + id)
  }
  updateUsuario(usuario: Usuario){
    return this.http.put<Usuario>(this.url + '/' + usuario.id, usuario)
  }
  addUsuario(usuario_add: Usuario) {
    return this.http.post<Usuario>(this.url,usuario_add)
  }
  /*getUsuarioById(id: number): Usuario {
    return this.usuarios.find(u => u.id === id);
  }*/

}
