import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { IUser } from '../../../api/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly users$ = new BehaviorSubject<IUser[]>([]);

  constructor(private readonly httpClient: HttpClient) {
    this.dropState();
  }

  dropState(): void {
    this.httpClient
      .get<IUser[]>('./assets/users-mock.json')
      .pipe(
        take(1)
      )
      .subscribe((response) => {
        this.users$.next((response));
      })
  }
}
