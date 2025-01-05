import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransac } from '../interfaces/ITransac';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  post(data: ITransac): Observable<ITransac>{
    return this.http.post<ITransac>('http://localhost:8080/transaction', data);
  }
}
