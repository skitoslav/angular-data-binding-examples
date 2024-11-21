import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../../../api/users';

@Injectable()
export class UserService {
  users$ = this.list$();

  constructor(private readonly httpClient: HttpClient) {
  }

  list$(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('./assets/users-mock.json');
  }
}
