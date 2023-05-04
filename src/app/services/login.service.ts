import { Usuario } from '../models/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user !: Usuario
  constructor() { }
  set usuario(usuario : Usuario){
    this.user = usuario;
  }
  get usuario(){
    return this.user;
  }
}
