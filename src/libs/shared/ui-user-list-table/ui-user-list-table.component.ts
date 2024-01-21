import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../../api/users';

@Component({
  selector: 'adbe-ui-user-list-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-user-list-table.component.html',
  styleUrls: ['./ui-user-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiUserListTableComponent {
  @Input() userList: IUser[] | null = [];
}
