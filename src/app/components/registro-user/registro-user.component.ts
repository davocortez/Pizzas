import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductosInterface } from 'src/app/models/productos-interface';
@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})
export class RegistroUserComponent implements OnInit {
  public email: string;
  public pass: string;
  trabajadores: ProductosInterface[];
  constructor(public autServices: LoginService, public router: Router,
    public mensaje: FlashMessagesService, public producSer: ProductosService) { }

  ngOnInit() {
    this.producSer.getTrabajadores().subscribe(trabajadores => {
      this.trabajadores = trabajadores;
    });
    this.producSer.getTrabajadores();
  }
  onSubmitAddUser() {
    this.autServices.registraUsuario(this.email, this.pass)
    .then( (res) => {
      this.mensaje.show('Usuario Creado correctamente',
      {cssClass: 'btn btn-danger btn-lg btn-block', timeout: 4000});
      this.email = '';
      this.pass = '';
    }).catch( (err) => {
      this.mensaje.show(err.message,
      {cssClass: 'danger btn', timeout: 4000});
    });
  }
}
