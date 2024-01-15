import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransac } from '../interfaces/ITransac';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  postLogin(data: Pick<ITransac, 'email' | 'password'>){
    return this.http.post('https://fullstack-production-924a.up.railway.app/transaction/auth', data, 
    {
      withCredentials: true 
    });
  }

  getLogin(){
    return this.http.get('https://fullstack-production-924a.up.railway.app/transaction/auth/login', { withCredentials: true })
  }
}
