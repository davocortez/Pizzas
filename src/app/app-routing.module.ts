import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { LoginComponent  } from './components/login/login.component';
import { NavBarUserComponent } from './components/nav-bar-user/nav-bar-user.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosService } from './services/productos.service';
import { ProtegerSesionGuard } from './guard/proteger-sesion.guard';
import { LoginAdminReComponent } from './components/login-admin-re/login-admin-re.component';
const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'registro', component: RegistroUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu-admin', component: ProductosComponent},
  {path: 'menu-user', component: MenuUserComponent, canActivate: [ProtegerSesionGuard]},
  {path: 'nav-bar-user', component: NavBarUserComponent},
  {path: 'login-admin', component: LoginAdminReComponent}
];
@NgModule ({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [RouterModule],
  providers: [ProductosService]
})
export class AppRoutingModule { }
