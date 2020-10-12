import { Routes } from '@angular/router';
import { RecibosComponent } from './Componentes/home/recibos/recibos.component';
import { EtiquitaComponent } from './Componentes/home/etiquita/etiquita.component';
import { UsuariosComponent } from './Componentes/administrador/usuarios/usuarios.component';

export const RECIBOS_ROUTES: Routes = [
    {path: 'recibos', component: RecibosComponent},
    {path: 'etiqueta', component: EtiquitaComponent},
    {path: 'usuarios', component: UsuariosComponent}
];