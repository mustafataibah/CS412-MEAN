import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private http: HttpClient) {}

  sendQuery(query: string) {
    return this.http.post('http://localhost:3000/api/query', { query });
  }
}
