import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface LoginResponse {
  ok:boolean,
  token: string,
  email: string,
  builder: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string=environment.baseUrl
  private _user:any

  get user(){ return { ...this._user}}

  constructor(private http:HttpClient) { }

  login(email:string, password:string){

    const url  = `${this.baseUrl}/auth/login`
    const body = {email, password}

    return this.http.post<LoginResponse>(url, body).pipe(
      tap(res => {
        if(res.ok){
          localStorage.setItem('tokenDemo',res.token)
          this._user={
            email   : res.email,
            builder : res.builder,
          }
        }
      }),
      map( res => res.ok ),
      catchError( err => of(err.error.msg) )
    )
  }

  validateToken() : Observable<boolean> {

    const url     = `${this.baseUrl}/auth/renew`
    const headers = new HttpHeaders().set( 'x-token', localStorage.getItem( 'tokenDemo' ) || '' )

    return this.http.get<LoginResponse>( url , { headers } ).pipe(
      map( res => {
        localStorage.setItem('tokenDemo',res.token)
        this._user={
          email : res.email,
          builder : res.builder
        }
        return res.ok
      }),
      catchError( err => of(false) )
    )
  }

  logout(){
    localStorage.removeItem('tokenDemo')
  }

}
