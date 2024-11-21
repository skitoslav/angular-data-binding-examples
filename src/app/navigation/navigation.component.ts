import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ApplicationRouteEnum } from '../../libs/shared/enums/navigation/application';

@Component({
    selector: 'adbe-navigation',
    imports: [CommonModule, RouterLink],
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  readonly linkList = [
    {
      label: 'Dashboard',
      url: ApplicationRouteEnum.DASHBOARD
    },
    {
      label: 'Angular Default',
      url: ApplicationRouteEnum.ANGULAR
    },
    {
      label: 'Users',
      url: ApplicationRouteEnum.USERS
    },
  ];

  readonly dataBindingLinkList = [
    {
      label: 'Based in component',
      url: ApplicationRouteEnum.BASED_IN_COMPONENT
    },
    {
      label: 'Based in service',
      url: ApplicationRouteEnum.BASED_IN_SERVICE
    },
    {
      label: 'Behaviour Subject',
      url: ApplicationRouteEnum.IN_DEVELOPMENT
    },
  ];
}
