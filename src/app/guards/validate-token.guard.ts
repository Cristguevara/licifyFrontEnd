import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor(private router:Router){}
  can:boolean=false
  canActivate(): Observable<boolean>  | boolean {
    if(localStorage.getItem('TokenDemo')){
      this.can=true
    }else{
      this.router.navigateByUrl('auth')
    }
    //console.log(localStorage.getItem('TokenDemo'))
    return this.can;
  }
  canLoad(): Observable<boolean>  | boolean {
    if(localStorage.getItem('TokenDemo')){
      this.can=true
    }else{
      this.router.navigateByUrl('auth')
    }
    //console.log('canLoad')
    return true;
  }
}
