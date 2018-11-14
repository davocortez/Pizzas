import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProductosComponent } from './components/add-productos/add-productos.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { ProductosService } from './services/productos.service';
import { HttpModule } from '@angular/http';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { LoginComponent } from './components/login/login.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginService } from './services/login.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavBarUserComponent } from './components/nav-bar-user/nav-bar-user.component';
import { ProtegerSesionGuard } from './guard/proteger-sesion.guard';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';
import { LoginAdminReComponent } from './components/login-admin-re/login-admin-re.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from './services/carrito.service';
import { NavLoginComponent } from './nav-login/nav-login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductosComponent,
    RegistroUserComponent,
    LoginComponent,
    MenuUserComponent,
    ProductosComponent,
    NavBarUserComponent,
    LoginAdminReComponent,
    NavLoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'pizzeria'),
    AngularFirestoreModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [ProductosService, LoginService, ProtegerSesionGuard, FlashMessagesService, CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
