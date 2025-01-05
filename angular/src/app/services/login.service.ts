import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransac } from '../interfaces/ITransac';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  postLogin(data: Pick<ITransac, 'email' | 'password'>){
    return this.http.post('http://localhost:8080/transaction/auth', data, 
    {
      withCredentials: true 
    });
  }

  getLogin(){
    return this.http.get('http://localhost:8080/transaction/auth/login', { withCredentials: true })
  }
}
