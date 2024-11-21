import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUserListTableComponent } from '../shared/ui-user-list-table/ui-user-list-table.component';
import { UserService } from './+state/user.service';
import { UsersServiceModule } from './+state/users-service.module';


@Component({
    selector: 'adbe-based-in-service',
    imports: [CommonModule, UiUserListTableComponent, UsersServiceModule],
    templateUrl: './based-in-service.component.html',
    styleUrls: ['./based-in-service.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasedInServiceComponent {
  constructor(public readonly userService: UserService) {}
}
