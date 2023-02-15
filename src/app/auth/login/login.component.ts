import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide         : boolean = true;
  messageError : string  = ''
  isError      : boolean = false

  form:FormGroup=this.fb.group({
    email    : ['info@w-techsas.com', [Validators.required, Validators.email]],
    password : ['123456', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.email?.valueChanges.subscribe( value => {
      this.isError = false
    })
    this.password?.valueChanges.subscribe( value => {
      this.isError = false
    })
  }

  get email() { return this.form.get('email')}
  get password() { return this.form.get('password')}

  login(){

    this.router.navigate(['/Componentes'])

    const { email, password } = this.form.value

    // this.authService.login(email,password).subscribe(ok => {
    //   if(ok===true){
    //     this.router.navigate(['/Componentes'])
    //   }else{
    //     this.messageError = ok
    //     this.isError      = true
    //   }
    // })
  }

}
