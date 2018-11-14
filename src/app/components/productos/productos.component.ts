import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../models/productos-interface';
import { ProductosService } from '../../services/productos.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: ProductosInterface[];
  editState: boolean = false;
  productoEdit: ProductosInterface;
  constructor(public producSer: ProductosService, public mensaje: FlashMessagesService) { }

  ngOnInit() {
    this.producSer.getProducts().subscribe(productos => {
      this.productos = productos;
    });
    this.producSer.getProducts();
  }

  editProducto(event, producto: ProductosInterface) {
    this.editState = true;
    this.productoEdit = producto;
  }
  onUpdateProducto(producto: ProductosInterface) {
    this.mensaje.show('Producto Modificado Correctamente',
    {cssClass: 'btn btn-danger btn-lg btn-block', timeout: 4000});
    this.producSer.updateProduct(producto);
    this.limpStado();
  }
  eliminarProducto(event, producto: ProductosInterface) {
    this.mensaje.show('Producto Eliminado Correctamente',
    {cssClass: 'btn btn-danger btn-lg btn-block', timeout: 4000});
    this.producSer.deleteProducto(producto);
    this.limpStado();
  }
  limpStado() {
    this.editState = false;
    this.productoEdit = null;
  }
}
