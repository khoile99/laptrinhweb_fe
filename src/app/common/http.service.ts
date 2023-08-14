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

  loginAdmin(userForm: any): Observable<any> {
    let form = new FormData();
    for (let key in userForm) {
      form.append(key, userForm[key]);
    }
    return this.http.post<any>(`${this.apiUrl}/admin/login`, form);
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

  getQA(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/public/get_qa`);
  }

  getInformation(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/public/get_information`);
  }

  editUser(userForm: any): Observable<any> {
    let form = new FormData();
    for (let key in userForm) {
      if (key == 'password' && userForm[key] == '') continue;
      form.append(key, userForm[key]);
    }
    var token = this.storage.getToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.post<any>(`${this.apiUrl}/edit`, form, {
      headers: headers,
    });
  }

  getCarts(): Observable<any> {
    var token = this.storage.getToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any>(`${this.apiUrl}/get_carts`, {
      headers: headers,
    });
  }

  updateNumberCart(id: any, numberProduct: any): Observable<any> {
    let form = new FormData();
    form.append('id', id);
    form.append('number', numberProduct);
    var token = this.storage.getToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.post<any>(`${this.apiUrl}/update_cart`, form, {
      headers: headers,
    });
  }

  deleteCart(id: any): Observable<any> {
    let form = new FormData();
    form.append('id', id);
    var token = this.storage.getToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.post<any>(`${this.apiUrl}/delete_order`, form, {
      headers: headers,
    });
  }

  listUsers(): Observable<any> {
    var token = this.storage.getAdminToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any>(`${this.apiUrl}/admin/list_user`, {
      headers: headers,
    });
  }

  getUserByAdmin(id: number): Observable<any> {
    var token = this.storage.getAdminToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any>(`${this.apiUrl}/admin/get_user/${id}`, {
      headers,
    });
  }

  updateUserByAdmin(userForm: any): Observable<any> {
    let form = new FormData();
    for (let key in userForm) {
      form.append(key, userForm[key]);
    }
    var token = this.storage.getAdminToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.post<any>(`${this.apiUrl}/admin/edit_user`, form, {
      headers: headers,
    });
  }

  deleteUser(id: number): Observable<any> {
    var token = this.storage.getAdminToken();
    var headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<any>(`${this.apiUrl}/admin/delete_user/${id}`, {
      headers: headers,
    });
  }
}
