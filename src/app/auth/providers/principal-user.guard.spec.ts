import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { Router, UrlTree } from '@angular/router';
import { PrincipalUserService } from './principal-user.service';
import { PrincipalUserGuard } from './principal-user.guard';
import { of } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

describe('PrincipalUserGuard', () => {

  const mockTheUrlTree = (): SpyObj<UrlTree> =>
    createSpyObj('UrlTree', ['toString']);

  const mockTheRouter = (): SpyObj<Router> =>
    createSpyObj('Router', ['parseUrl']);

  const mockThePrincipalUserService = (): SpyObj<PrincipalUserService> =>
    createSpyObj('PrincipalUserService', ['hasPrincipalUser$']);

  let mockUrlTree: SpyObj<UrlTree>;
  let mockRouter: SpyObj<Router>;
  let mockPrincipalUserService: SpyObj<PrincipalUserService>;

  let principalUserGuard: PrincipalUserGuard;

  beforeEach(() => {
    mockUrlTree = mockTheUrlTree();
    mockRouter = mockTheRouter();
    mockPrincipalUserService = mockThePrincipalUserService();

    mockRouter.parseUrl
      .withArgs('/not-entitled').and
      .returnValue(mockUrlTree);

    mockPrincipalUserService.hasPrincipalUser$
      .and.returnValue(of(false));

    principalUserGuard = new PrincipalUserGuard(mockRouter, mockPrincipalUserService);
  });

  describe('canActivate', () => {

    let result: boolean | UrlTree | undefined;

    beforeEach(waitForAsync(() => {
      principalUserGuard.canActivate().subscribe(canActivate => result = canActivate);
    }));

    it('should determine the appropriate activation procedure based on the principal', () =>
      expect(result).toEqual(mockUrlTree));

  });

});
