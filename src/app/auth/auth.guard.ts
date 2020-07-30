import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/internal/operators/map';
import { tap, take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): 
                boolean | 
                UrlTree |
                Promise<boolean | UrlTree> | 
                Observable<boolean | UrlTree> {
      return  this.authService.user.pipe( 
        take(1),  
        map(user =>{

            const isAuth = !!user;
            if(isAuth){
                return true;
            }
            // Alternative way of re-routing
            return this.router.createUrlTree(['/auth']);
        })  
        
        //This is the normal way of re-routing the page if it's not accessible
        //, tap (isAuth => {
        //     if(!isAuth){
        //         this.router.navigate(['/auth']);
        //     }
        // })
        
        );
    }
}