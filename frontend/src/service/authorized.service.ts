import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../env';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedService {
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<any> {
    const url = config.backend.url + config.backend.endPoints.allusers;
    return this.http.get(url, { withCredentials: true });
  }
  getAllFriends(): Observable<any> {
    const url = config.backend.url + config.backend.endPoints.allfriends;
    return this.http.get(url, { withCredentials: true });
  }

  getUserProfile(): Observable<any> {
    const url = config.backend.url + config.backend.endPoints.getuserprofile;
    return this.http.get(url, { withCredentials: true });
  }
}
