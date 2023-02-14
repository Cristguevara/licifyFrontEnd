import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor(private router:Router , private authService: AuthService){}

  can:boolean=false

  canActivate(): Observable<boolean>  | boolean {
    return this.authService.validateToken().pipe(
      tap(validate => {
        if(!validate){
          this.router.navigate(['/auth'])
        }
      })
    );
  }

  canLoad(): Observable<boolean>  | boolean {
    return this.authService.validateToken().pipe(
      tap(validate => {
        if(!validate){
          this.router.navigate(['/auth'])
        }
      })
    );
  }
}
