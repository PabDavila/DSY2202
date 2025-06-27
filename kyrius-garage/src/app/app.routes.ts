import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegistroComponent } from './pages/registro/registro';
import { RecuperarComponent } from './pages/recuperar/recuperar';
import { PerfilComponent } from './pages/perfil/perfil';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', component: NotFoundComponent } // Página 404
];


// Este export probablemente ya esté en `main.ts` como parte de `bootstrapApplication`
export const appRoutingProviders = [
  provideRouter(routes)
];
