import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransac } from '../interfaces/ITransac';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  postLogin(data: Pick<ITransac, 'email' | 'password'>){
    return this.http.post('https://fullstack-production-924a.up.railway.app/transaction/auth', data);
  }

  getLogin(){
    return this.http.get('https://fullstack-production-924a.up.railway.app/transaction/auth/login', { withCredentials: true })
  }
}
