import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { PrincipalUserService } from '../../../auth/providers/principal-user.service';
import { NavigationComponent } from './navigation.component';
import { mockUser } from '../../../mocks/mock-user';
import { of } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';
import { User } from '../../../interfaces/user';

describe('NavigationComponent', () => {

  const testUser: User = mockUser();

  const mockThePrincipalUserService = (): SpyObj<PrincipalUserService> =>
    createSpyObj('PrincipalUserService', ['getPrincipalUser$']);

  let mockPrincipalUserService: SpyObj<PrincipalUserService>;

  let navigationComponent: NavigationComponent;

  beforeEach(waitForAsync(() => {
    mockPrincipalUserService = mockThePrincipalUserService();
    mockPrincipalUserService.getPrincipalUser$.and.returnValue(of(testUser));

    navigationComponent = new NavigationComponent(mockPrincipalUserService);
    navigationComponent.ngOnInit();
  }));

  describe('after initialisation', () => {

    it('should have assigned the principal user', () =>
      expect(navigationComponent.user).toEqual(testUser));

    it('should have assigned the navigation links', () =>
      expect(navigationComponent.LINKS).toBeDefined());

  });

});
