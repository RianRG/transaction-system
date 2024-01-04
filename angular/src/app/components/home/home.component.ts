import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  form!: FormGroup;
  errorMsg!: string;
  constructor(
    private homeService: HomeService,
    private fb: FormBuilder
    ){
      this.form = this.fb.group({
        transaction: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        type: ['', Validators.required],
        amount: ['', Validators.required]
      })
  }

  onSubmit(){

    if(this.form.value.type.toLowerCase() !=='debit' && 
    this.form.value.type.toLowerCase() !=='credit'){

      this.errorMsg='Only available types: "credit" or "debit"';
    } else{
      this.errorMsg='';
    }

    if(this.form.value.password.length<7) this.errorMsg='Min length password is 7'

    if(this.form.valid){
      this.homeService.post(this.form.value).subscribe(data =>{
        console.log(data);
      });
    } else{
      this.errorMsg='Empty fields are not accepted!'
    }
  }
}
