import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { USERS } from './users-mock.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly initialUsers = USERS.slice() as IUser[];
  readonly users$ = new BehaviorSubject<IUser[]>([]);

  constructor() {
    this.dropState();
  }

  dropState(): void {
    this.users$.next((this.initialUsers))
  }
}
