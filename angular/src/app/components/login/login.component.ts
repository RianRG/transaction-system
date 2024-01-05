import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
    ){
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    this.loginService.postLogin(this.form.value).subscribe(data =>{
      if(data) this.router.navigateByUrl('/user')
    })
  }
}
