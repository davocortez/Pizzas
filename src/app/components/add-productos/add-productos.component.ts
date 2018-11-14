import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ProductosInterface } from '../../models/productos-interface';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {
  productos: ProductosInterface[];
  productoNew: ProductosInterface = {
    nombre: '',
    precio: '',
    descrp: '',
    imagen: '',
   };
 constructor(public produService: ProductosService, public mensaje: FlashMessagesService) { }

  ngOnInit() {
    this.produService.getProducts().subscribe(productos => {
    this.productos = productos;
    });
    this.produService.getProducts();
  }

  onGuardarProducto(formNew: NgForm) {
    this.mensaje.show('Producto Agregado Correctamente',
    {cssClass: 'btn btn-danger btn-lg btn-block', timeout: 4000});
    this.produService.addProducto(this.productoNew);
    formNew.resetForm();
  }
}
