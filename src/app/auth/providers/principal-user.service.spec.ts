import { PrincipalUserService } from './principal-user.service';
import { mockUser } from '../../mocks/mock-user';
import { waitForAsync } from '@angular/core/testing';

describe('PrincipalUserService', () => {

  const principalUserService: PrincipalUserService = new PrincipalUserService();

  describe('hasPrincipalUser$', () => {

    it('should indicate whether or not the last item on the subject was an authenticated user', (done: DoneFn) =>
      principalUserService.hasPrincipalUser$().subscribe(hasPrincipalUser => {
        expect(hasPrincipalUser).toBe(true);
        done();
      }));

  });

  describe('getPrincipalUser$', () => {

    it('should retrieve the last user on the subject', (done: DoneFn) =>
      principalUserService.getPrincipalUser$().subscribe(principal => {
        expect(principal).toEqual(mockUser());
        done();
      }));

  });

  describe('setPrincipalUser', () => {

    beforeEach(waitForAsync(() => {
      principalUserService.setPrincipalUser(mockUser());
    }));

    it('should set the state of the principal user on the subject', (done: DoneFn) =>
      principalUserService.getPrincipalUser$().subscribe(principal => {
        expect(principal).toEqual(mockUser());
        done();
      }));

  });

});
