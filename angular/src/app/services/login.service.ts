import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransac } from '../interfaces/ITransac';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogin(data: Pick<ITransac, 'email' | 'password'>){
    return this.http.post('http://localhost:3000/transaction/auth', data);
  }

  getLogin(){
    return this.http.get('http://localhost:3000/transaction/auth/login', 
    { withCredentials: true });
  }
}
