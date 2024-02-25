import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {
  private _url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  // Procedural
  classicPattern(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }

  // Declarative
  users$ = this.http.get<User[]>(this._url);
}
