import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './+state/users.service';
import { UiUserListTableComponent } from '../shared/ui-user-list-table/ui-user-list-table.component';

@Component({
    selector: 'adbe-users',
    imports: [CommonModule, UiUserListTableComponent],
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  constructor(public usersService: UsersService) {}
}
