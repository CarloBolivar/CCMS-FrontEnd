import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm !: FormGroup
  constructor(private usuarioService: UsuariosService, 
    private fb: FormBuilder, 
    private router: Router,
    private loginService: LoginService){}
    
  ngOnInit(){
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  iniciarSesion(){
    this.usuarioService.getUsuarios().subscribe(
      (usuarios: Usuario[]) =>{
        let usuario = usuarios.find((x) =>  x.email == this.myForm.value.email && x.password == this.myForm.value.password)
        if(usuario != null){
          this.loginService.usuario = usuario
          if(this.loginService.usuario.tipoUsuario == "paciente")
            this.router.navigate(['home-paciente']);
          else
            this.router.navigate(['home-psicologo']);
        }
      }
    )
  }

  registro(){
    this.router.navigate(["registro"]);
    //this.usuarioService.addUsuario();
  }
  
}
