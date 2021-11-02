import { Directive, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { PrincipalUserService } from '../providers/principal-user.service';

@Directive()
export abstract class PrincipalAwareComponent implements OnInit {

  user!: User;

  protected constructor(protected _principalUserService: PrincipalUserService) {
  }

  ngOnInit() {
    this.retrievePrincipalUser();
  }

  private retrievePrincipalUser(): void {
    this._principalUserService.getPrincipalUser$().subscribe(user => this.user = user);
  }
}
