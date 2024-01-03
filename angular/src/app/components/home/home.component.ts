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

  constructor(
    private homeService: HomeService,
    private fb: FormBuilder
    ){
      this.form = this.fb.group({
        email: ['', Validators.required]
      })
  }

  onSubmit(){
    this.homeService.get().subscribe(data =>{
      console.log(data);
    })
  }
}
