import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  canActivate(): boolean {
    return true;
  }
}
