import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProductosInterface } from '../models/productos-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productCollection: AngularFirestoreCollection<ProductosInterface>;
  productCollectionTrabaja: AngularFirestoreCollection<ProductosInterface>;
  productos: Observable<ProductosInterface[]>;
  trabajadores: Observable<ProductosInterface[]>;
  productDoc: AngularFirestoreDocument<ProductosInterface>;
  constructor(public afs: AngularFirestore) {
    this.productCollection = afs.collection<ProductosInterface>('productos');
    this.productCollectionTrabaja = afs.collection<ProductosInterface>('trabajadores');
    this.productos = this.productCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ProductosInterface;
        const id = a.payload.doc.id;
        return{ id, ...data };
      }))
    );
    this.trabajadores = this.productCollectionTrabaja.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ProductosInterface;
        const id = a.payload.doc.id;
        return{ id, ...data };
      }))
    );
   }
   getProducts() {
     return this.productos;
   }
   getTrabajadores() {
     return this.trabajadores;
   }
   addProducto(producto: ProductosInterface) {
    this.productCollection.add(producto);
   }
   deleteProducto(producto: ProductosInterface) {
    this.productDoc = this.afs.doc(`productos/${producto.id}`);
    this.productDoc.delete();
   }
   updateProduct(producto: ProductosInterface) {
     this.productDoc = this.afs.doc(`productos/${producto.id}`);
     this.productDoc.update(producto);
   }
}
