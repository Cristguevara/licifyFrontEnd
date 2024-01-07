import { Component, OnInit,AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import lottie from 'lottie-web';
import animationData from '../../../assets/animations/login.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {

  hide         : boolean = true;
  messageError : string  = ''
  isError      : boolean = false

  form:FormGroup=this.fb.group({
    email    : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService:AuthService
  ) { }

  ngAfterViewInit(): void {
    const container = document.getElementById('lottie-container-login');
    if (container) {
      lottie.loadAnimation({
        container: container,
        animationData: JSON.parse(JSON.stringify(animationData)),
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
    }
  }

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

    const { email, password } = this.form.value

    this.authService.login(email,password).subscribe(ok => {
      if(ok===true){
        this.router.navigate(['/'])
      }else{
        this.messageError = ok
        this.isError      = true
      }
    })

  }

}
