import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ProductosService } from '../../services/productos.service';
import { ProductosInterface } from '../../models/productos-interface';
@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css']
})
export class NavBarUserComponent implements OnInit {
  public isLogin: boolean;
  public email: string;
  productos: ProductosInterface[];
  constructor(public loginSer: LoginService, public produSer: ProductosService) { }

  ngOnInit() {
    this.loginSer.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.email = auth.email;
      } else {
        this.isLogin = false;
      }
    });

    this.produSer.getProducts().subscribe(productos => {
      this.productos = productos;
    });
  }

  onClickLogaut() {
    this.loginSer.cerarSesion();
  }
}
