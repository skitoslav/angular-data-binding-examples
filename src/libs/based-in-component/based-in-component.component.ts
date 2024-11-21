import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  UiUserListTableComponent
} from '../shared/ui-user-list-table/ui-user-list-table.component';
import { IUser } from '../../api/users';

@Component({
    selector: 'adbe-based-in-component',
    imports: [CommonModule, UiUserListTableComponent],
    templateUrl: './based-in-component.component.html',
    styleUrls: ['./based-in-component.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasedInComponentComponent {
  users$: Observable<IUser[]>;

  constructor(private readonly httpClient: HttpClient) {
    this.users$ = this.httpClient.get<IUser[]>('./assets/users-mock.json');
  }
}
