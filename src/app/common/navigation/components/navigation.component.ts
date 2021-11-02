import { Component } from '@angular/core';
import { PrincipalUserService } from '../../../auth/providers/principal-user.service';
import { PrincipalAwareComponent } from '../../../auth/components/principal-aware.component';
import { NavigationLink } from '../interfaces/navigation-link';

@Component({
  selector: 'emed-navigation',
  styleUrls: ['navigation.component.scss'],
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent extends PrincipalAwareComponent {

  readonly LINKS: NavigationLink[] = [{
    name: 'Dashboard',
    location: '/'
  }, {
    name: 'Appointments',
    location: '/appointments'
  }, {
    name: 'Outcomes',
    location: '/outcomes'
  }, {
    name: 'Billing',
    location: '/billing'
  }];

  constructor(protected _principalUserService: PrincipalUserService) {
    super(_principalUserService);
  }
}


