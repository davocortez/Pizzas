import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  registraUsuario(email: string, pass: string) {
    return new Promise ((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginUsuario(email: string, pass: string) {
    return new Promise ((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginAdministrador(email: string, pass: string) {
    return new Promise ((resolver, rejecta) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(adminData => resolver(adminData),
      err => rejecta(err));
    });
  }
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  cerarSesion() {
    this.router.navigate(['/login']);
    return this.afAuth.auth.signOut();
  }

  cerrarSesionAdmin() {
    this.router.navigate(['/login-admin']);
    return this.afAuth.auth.signOut();
  }
}
