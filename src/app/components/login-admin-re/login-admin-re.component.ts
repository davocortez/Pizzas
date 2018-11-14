import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login-admin-re',
  templateUrl: './login-admin-re.component.html',
  styleUrls: ['./login-admin-re.component.css']
})
export class LoginAdminReComponent implements OnInit {
  public email: string;
  public password: string;

  constructor( public logSer: LoginService, public router: Router, public mensaje: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLoginAdmin() {
    this.logSer.loginAdministrador(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/menu-admin']);
    }).catch( (err) => {
      this.mensaje.show('Acceso Denegado',
      {cssClass: 'waves-effect waves-light btn', timeout: 4000});
      this.router.navigate(['/login']);
      this.email = '';
      this.password = '';
    });
  }

}
