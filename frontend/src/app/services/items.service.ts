import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

const api = "http://localhost:8080/api/items"

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(api);
  }

  get(id: any): Observable<Item> {
    return this.http.get<Item>(`${api}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(api, data, { withCredentials: true });
  }

  update(id: any, attrs: object): Observable<any> {
    return this.http.post(`${api}/${id}`, attrs);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${api}/${id}`);
  }
}
