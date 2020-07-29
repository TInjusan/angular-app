import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Interface } from 'readline';
import { catchError, tap } from 'rxjs/operators';
import { throwError,  BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered ?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    user =  new BehaviorSubject<User>(null);

    constructor(private http:  HttpClient, private router: Router){}

    signUp(email: string, password: string){
      return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjcMosQvGASLG_sdrlfeY_VZd7p6xmcK4',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        ).pipe( catchError( this.handleError),
        tap(resData => {
           this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);

        }) );
    }

    login(email: string, password: string){
        return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjcMosQvGASLG_sdrlfeY_VZd7p6xmcK4',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        
        ).pipe( catchError( this.handleError),
        tap(resData => {
           this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);

        }) );

    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
    }

    private handleAuthentication (email: string, userId: string, token: string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }
    private handleError (errorResponse: HttpErrorResponse){
        let errorMessage = 'An unknown error occured';
        if (!errorResponse.error || !errorResponse.error.error){
          return throwError(errorMessage);
        }

        switch (errorResponse.error.error.message){
          case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists';
                break;
           case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email doesn\'t exists';
                break;
           case 'INVALID_PASSWORD':
                errorMessage = 'The password is incorrect';
                break;
        } 
        return throwError(errorMessage);
     
    }
}