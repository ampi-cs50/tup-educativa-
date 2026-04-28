import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Configuracion } from './features/configuracion/configuracion';
import { Items } from './features/items/items';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
    { path: 'login', component: Login},
    { path: 'configuracion', component: Configuracion},
    { path: 'items', canActivate: [authGuard], component: Items},
    { path: '', component: Login},
    { path: '**', redirectTo: 'login'}
];
