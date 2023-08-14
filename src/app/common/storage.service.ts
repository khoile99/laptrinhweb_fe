import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clearToken() {
    this.remove('token');
  }

  setToken(token: string) {
    this.set('token', token);
  }

  getToken() {
    return this.get('token');
  }

  getAdminToken() {
    return this.get('adminToken');
  }

  clearAdminToken() {
    this.remove('adminToken');
  }

  setAdminToken(token: string) {
    this.set('adminToken', token);
  }
}
