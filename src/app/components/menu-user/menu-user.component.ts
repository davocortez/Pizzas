import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../models/productos-interface';
import { ProductosService } from '../../services/productos.service';
import { LoginService } from '../../services/login.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoInterface } from '../../models/carrito-interface';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { CarritoService } from '../../services/carrito.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MenuUserComponent implements OnInit {
  productos: ProductosInterface[];
  carrito: CarritoInterface[];
  productoEdit: ProductosInterface;
  productoo: ProductosInterface;
  public isLogin: boolean;
  public email: string;
  public nombre: string;
  public precio: string;
  public tama: string;
  produ: ProductosInterface = {
    nombre: '',
    precio: '',
    descrp: '',
  };
  productoIn: CarritoInterface = {
    nombre: 'Hawaiana',
    precio: '400',
    tamnoP: 'Grande',
  };
  constructor(public produService: ProductosService, public loginSer: LoginService,
    config: NgbModalConfig, private modalService: NgbModal,
    public carritoService: CarritoService, public mensaje: FlashMessagesService) {
      config.backdrop = 'static';
      config.keyboard = false;
    }
  ngOnInit() {
    this.produService.getProducts().subscribe(productos => {
      this.productos = productos ;
    });
    this.loginSer.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.email = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }

  onGuardarProductoCar(formNew: NgForm) {
    this.carritoService.addCarrito(this.productoIn);
    this.mensaje.show('Pedido Agregado',
    {cssClass: 'btn btn-danger btn-lg btn-block', timeout: 4000});
    this.carritoService.carrito.subscribe(carrito => {
      this.carrito = carrito ;
    });
  }

  verModal(producto, pizzas) {
    this.produ = producto;
    this.modalService.open(pizzas);
  }
}
