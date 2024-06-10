import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const api = "http://localhost:8080/api/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: User): Observable<User> {
    return this.http.post<User>(`${api}/login`, data, { withCredentials: true });
  }

  register(data: User): Observable<any> {
    return this.http.post(`${api}/register`, data, { withCredentials: true });
  }

  logout() {
    return this.http.post(`${api}/logout`, {}, { withCredentials: true });
  }
}
