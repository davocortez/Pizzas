import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUser: string;
  public email: string;

  constructor(public loginSer: LoginService) { }

  ngOnInit() {
    this.loginSer.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUser = auth.displayName;
        this.email = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }
  onClickLogautAdmin() {
    this.loginSer.cerrarSesionAdmin();
  }

}
