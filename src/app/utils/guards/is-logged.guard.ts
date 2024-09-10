import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const token = authService.getToken();
  if(!token) {
    alert(`Vous devez être connecté.e pour accéder à cette page`);
    router.navigate(['/login'])
    return false;
  }
  return true;
};
