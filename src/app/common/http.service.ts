import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrowserStorageService } from './storage.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  constructor(
    private http: HttpClient,
    private storage: BrowserStorageService
  ) {}
  apiUrl = environment.apiUrl;

  login(userForm: any): Observable<any> {
    let form = new FormData();
    for (let key in userForm) {
      form.append(key, userForm[key]);
    }
    return this.http.post<any>(`${this.apiUrl}/login`, form);
  }

  getUser(): Observable<any> {
    var token = this.storage.getToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any>(`${this.apiUrl}/get_user`, { headers });
  }

  register(userForm: any): Observable<any> {
    let form = new FormData();
    for (let key in userForm) {
      form.append(key, userForm[key]);
    }
    return this.http.post<any>(`${this.apiUrl}/register`, form);
  }

  listProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/public/list_products`);
  }

  getProduct(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/public/get_product/${id}`);
  }

  getComments(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/public/get_comment/${id}`);
  }

  addComment(userForm: any): Observable<any> {
    let form = new FormData();
    for (let key in userForm) {
      form.append(key, userForm[key]);
    }
    var token = this.storage.getToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.post<any>(`${this.apiUrl}/send_comment`, form, {
      headers,
    });
  }
}
