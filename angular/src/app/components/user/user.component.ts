import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private loginService: LoginService){};
  ngOnInit(){
    this.loginService.getLogin().subscribe(data =>{
      if(!data){
        console.log('unauthorized!!!!!!!')
      }
    });
  }
}
