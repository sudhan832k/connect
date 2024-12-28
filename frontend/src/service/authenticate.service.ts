import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../env';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}
  createNewUser(data: any): Observable<any> {
    const url = Config.backend.url + Config.backend.endPoints.signup;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      withCredentials: 'true',
    });
    return this.http.post(url, data);
  }
}
