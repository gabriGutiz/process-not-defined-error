import { authGuard } from '@core';
import { Routes } from '@angular/router';
import { LoginComponent, HomeComponent, NotFoundComponent } from '@pages';

export const routes: Routes = [
  {
    path: '',
    title: 'TestApp',
    canActivate: [authGuard],
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '',
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', title: 'TestApp - Log in', component: LoginComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
