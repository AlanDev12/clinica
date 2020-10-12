import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AdministradorComponent } from './Componentes/administrador/administrador.component';

/*Rutas Hijas*/
import {RECIBOS_ROUTES} from './app.Hijas.routes';

const APP_ROUTES: Routes = [
    {
        path: 'home', 
        component:HomeComponent,
        children:RECIBOS_ROUTES
    },
    {path:'administrador', component: AdministradorComponent, children: RECIBOS_ROUTES},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);