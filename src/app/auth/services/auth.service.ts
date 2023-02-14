import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string=environment.baseUrl
  private _user:any

  get user(){ return { ...this._user}}

  constructor(private http:HttpClient) { }

  login(email:string, password:string){

    const url  = `${this.baseUrl}/auth`
    const body = {email, password}

    return this.http.post<any>(url, body).pipe(
      tap(res => {
        if(res.ok){
          localStorage.setItem('tokenDemo',res.token)
          this._user={
            email : res.email,
            uid   : res.uid
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

    return this.http.get<any>( url , { headers } ).pipe(
      map( res => {
        localStorage.setItem('tokenDemo',res.token)
        this._user={
          email : res.email,
          uid   : res.uid
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
