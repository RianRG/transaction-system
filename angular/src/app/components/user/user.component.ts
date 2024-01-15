import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  errorMsg!:boolean;
  constructor(
    private loginService: LoginService,
    private router: Router
    ){};
  ngOnInit(){
    this.loginService.getLogin().subscribe(data =>{
      console.log(`data::::: ${data}`);
      this.errorMsg=true;
    }, (error: Error) =>{
      console.log('erorrrororroo')
      this.errorMsg=false;
      console.log(error);
      setTimeout(() =>{
        this.router.navigateByUrl('/login');
      }, 1000)
    });
  }
}
