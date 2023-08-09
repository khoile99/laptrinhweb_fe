import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  constructor(private http: HttpClient) {}
  apiUrl = environment.apiUrl;

  login(userForm: any): Observable<any> {
    let form = new FormData();
    for (let key in userForm) {
      form.append(key, userForm[key]);
    }
    return this.http.post<any>(`${this.apiUrl}/login`, form);
  }

  listProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/public/list_products`);
  }

  getProduct(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/public/get_product/${id}`);
  }
}
