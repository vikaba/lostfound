import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const api = "http://localhost:8080/api/users"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<User> {
    return this.http.get<User>(`${api}/${id}`);
  }

  getBySession(sessionKey: any):  Observable<User> {
    return this.http.get<User>(api, { params: new HttpParams().set('session_key', sessionKey) });
  }

  create(data: any): Observable<any> {
    return this.http.post(api, data);
  }
}
