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
  iClass: string="bx bxs-low-vision";
  typePassword: string='password';
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
      console.log(data);
    })
  }

  revealPass(){
    if(this.typePassword=='password'){
      this.typePassword='text' ;
      this.iClass="bx bxs-low-vision white"
    } else{
      this.typePassword='password';
      this.iClass="bx bxs-low-vision"; 
    }
  }
}
