import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isAuthenticatedUser, User } from '../../interfaces/user';
import { map } from 'rxjs/operators';
import { mockUser } from '../../mocks/mock-user';

@Injectable({providedIn: 'root'})
export class PrincipalUserService {

  /**
   * For showcase purposes only, I have initialised the
   * behaviour subject with a mock user. In a real world
   * scenario, we would populate the principal after login.
   */
  private _principalUser$ = new BehaviorSubject<User>(mockUser());

  hasPrincipalUser$(): Observable<boolean> {
    return this._principalUser$.asObservable().pipe(map(isAuthenticatedUser));
  }

  getPrincipalUser$(): Observable<User> {
    return this._principalUser$.asObservable();
  }

  setPrincipalUser(user: User): void {
    this._principalUser$.next(user);
  }
}
