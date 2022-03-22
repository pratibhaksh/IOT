import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';
import { LocalstorageService } from 'src/app/auth/localstorage.service';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../model/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  apiURLUsers = environment.apiUrl + 'users';

  constructor(
    private http: HttpClient,
    private router: Router,
    private localstorage:LocalstorageService
  ) {}

  login(email: string, password: string): Observable<LoginModel> {
    debugger
    return this.http.post<LoginModel>(`${this.apiURLUsers}/login`, { email, password });
  }

//   logout() {
// this.localstorage.removeToken();
//     this.router.navigate(['/login']);
   
//   }
}


