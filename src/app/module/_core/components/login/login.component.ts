import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/auth/localstorage.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;

  isSubmitted=false;
  authError = false;
  authMessage: string;
  constructor(private formBuilder:FormBuilder, 
    private auth: LoginService,
    private localstorage:LocalstorageService,
    private router: Router) { 
   
  }

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    debugger
    this.isSubmitted = true
    // if (this.loginFormGroup.invalid) {return};
    this.auth.login(this.loginForm['email'].value,this.loginForm['password'].value).subscribe((user:any)=>{
    console.log(user)
    if(user){
      this.localstorage.setToken(user.token)
      this.router.navigate(['/DealerMgmt']);
    }
    },
    ((error:HttpErrorResponse)=>{
      this.authError = true;
            if (error.status !== 400) {
              this.authMessage = 'Error in the Server, please try again later!';
            }
    })
    )
      }
  
  get loginForm(){
    return this.loginFormGroup.controls
  }
}
