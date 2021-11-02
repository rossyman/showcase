import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PrincipalUserService } from './principal-user.service';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PrincipalUserGuard implements CanActivate {

  constructor(private _router: Router,
              private _principalUserService: PrincipalUserService) {
  }

  canActivate(): Observable<UrlTree | boolean> {
    return this._principalUserService.hasPrincipalUser$().pipe(map(hasUser => this.handleActivation(hasUser)));
  }

  private handleActivation(hasUser: boolean): UrlTree | boolean {
    return hasUser || this._router.parseUrl('/not-entitled');
  }
}
