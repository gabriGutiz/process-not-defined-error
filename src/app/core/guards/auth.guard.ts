import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  try {
    const token = localStorage.getItem('tk');
    if (token) {
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      if (expiry * 1000 < Date.now()) return true;
    }
    return inject(Router).createUrlTree(['/login']);
  } catch (error) {
    return false;
  }
};
