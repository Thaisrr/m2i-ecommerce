import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CartComponent} from "./pages/cart/cart.component";
import {isLoggedGuard} from "./utils/guards/is-logged.guard";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent), children: [
      {path: '', loadComponent: () => import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [isLoggedGuard]},
      {path: 'add', loadComponent: () => import('./pages/admin/add/add.component').then(m => m.AddComponent), canActivate: [isLoggedGuard]},
      {path:  'login', loadComponent: () => import('./pages/admin/login/login.component').then(m => m.LoginComponent)},
      {path:  'register', loadComponent: () => import('./pages/admin/add-user/add-user.component').then(m => m.AddUserComponent)},
      {path: 'update/:id', loadComponent: () => import('./pages/admin/update/update.component').then(m => m.UpdateComponent), canActivate: [isLoggedGuard]}
    ]},
  {path: 'panier', component: CartComponent}
];
