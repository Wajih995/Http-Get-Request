import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    let url = "http://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }
}
