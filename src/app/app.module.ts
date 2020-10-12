import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*Componentes*/

import { AppComponent } from './app.component';
import { SidebarComponent } from './Componentes/sidebar/sidebar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { RecibosComponent } from './Componentes/home/recibos/recibos.component';
import { EtiquitaComponent } from './Componentes/home/etiquita/etiquita.component';

/*Rutas */
import {APP_ROUTING} from './app.routes';

import { AdministradorComponent } from './Componentes/administrador/administrador.component';
import {UsuariosComponent} from './Componentes/administrador/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    RecibosComponent,
    EtiquitaComponent,
    AdministradorComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
