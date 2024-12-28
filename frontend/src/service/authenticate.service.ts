import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../env';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}
  userSignup(data: any): Observable<any> {
    const url = config.backend.url + config.backend.endPoints.signup;
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   withCredentials: 'true',
    // });
    return this.http.post(url, data);
  }

  userSignin(data: any): Observable<any> {
    const url = config.backend.url + config.backend.endPoints.signin;
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   withCredentials: 'true',
    // });
    return this.http.post(url, data);
  }
}
