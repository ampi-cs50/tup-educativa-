import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const isLogged = await authService.isAuthenticated();

  if (isLogged) {
    return true;
  }

  return router.createUrlTree(['/login']);
};