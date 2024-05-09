import { Component } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios.interface';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { environment } from '../../../enviroments/enviroment';
import 'animate.css';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  titulo:string = 'SOFTWARE PARA RESTAURANTES';
  titulosize:string = '20px';

  usuario='';
  pass = '';

  usuarios!:Usuarios;

  constructor(private usuariosSvc:AuthService){
    this.titulo= environment.SUBTITULO_LOGO_LOGIN.title;
    this.titulosize= environment.SUBTITULO_LOGO_LOGIN.size;
  }

          onSubmit(){


            location.href='dashboard';
          }


}
