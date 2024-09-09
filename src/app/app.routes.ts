import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CartComponent} from "./pages/cart/cart.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent), children: [
      {path: '', loadComponent: () => import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)},
      {path: 'add', loadComponent: () => import('./pages/admin/add/add.component').then(m => m.AddComponent)},
    ]},
  {path: 'panier', component: CartComponent}
];
