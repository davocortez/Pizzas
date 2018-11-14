import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public logSer: LoginService, public router: Router, public mensaje: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.logSer.loginUsuario(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/menu-user']);
    }).catch((err) => {
      this.mensaje.show('Acceso Denegado',
      {cssClass: 'btn btn-danger btn-lg btn-block', timeout: 4000});
      this.router.navigate(['/login']);
      this.email = '';
      this.password = '';
    });
  }
}
