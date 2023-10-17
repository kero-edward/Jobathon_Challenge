import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = '../../assets/tasks.json';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

}
