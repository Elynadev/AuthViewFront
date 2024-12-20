// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Vérifiez si le token est présent dans le stockage local
    if (localStorage.getItem('token')) {
      return true; // Permettre l'accès à la route
    }
    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
    return false; // Interdire l'accès à la route
  }
}
