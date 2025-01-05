import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getMessagesByReceiverId(params: any): Observable<any> {
    const queryParams = new HttpParams({ fromObject: params });
    const url = config.backend.url + config.backend.endPoints.getmessages;
    return this.http.get(url, { params: queryParams, withCredentials: true });
  }

  postMessage(data: any): Observable<any> {
    const url = config.backend.url + config.backend.endPoints.sendmessage;
    return this.http.post(url, data, { withCredentials: true });
  }
}
