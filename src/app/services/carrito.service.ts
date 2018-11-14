import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CarritoInterface } from '../models/carrito-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carritoCollection: AngularFirestoreCollection<CarritoInterface>;
  carrito: Observable<CarritoInterface[]>;
  carritoDoc: AngularFirestoreDocument<CarritoInterface>;
  constructor(public afs: AngularFirestore) {
    this.carritoCollection = afs.collection<CarritoInterface>('carrito');
    this.carrito = this.carritoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CarritoInterface;
        const id = a.payload.doc.id;
        return{ id, ...data };
      }))
    );
   }

  getCarrito() {
    return this.carrito;
  }
  addCarrito(carrito: CarritoInterface) {
   this.carritoCollection.add(carrito);
  }
  deleteCarrito(carrito: CarritoInterface) {
   this.carritoDoc = this.afs.doc(`productos/${carrito.id}`);
   this.carritoDoc.delete();
  }
}
