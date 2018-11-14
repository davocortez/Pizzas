import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProtegerSesionGuard implements CanActivate {
  constructor(public angulFire: AngularFireAuth, public logSer: LoginService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.logSer.afAuth.authState
    .take(1)
    .map(authState  => !! authState)
    .do(authenticated => {
      if (!authenticated) {
        this.router.navigate(['/login']);
      }
    });
  }
}
