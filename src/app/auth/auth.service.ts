import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interface } from 'readline';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

    constructor(private http:  HttpClient){}

    signUp(email: string, password: string){
      return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjcMosQvGASLG_sdrlfeY_VZd7p6xmcK4',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        ).pipe( 
            catchError (errorResponse => {
              let errorMessage = 'An unknown error occured';
              if (!errorResponse.error || !errorResponse.error.error){
                return throwError(errorMessage);
              }

              switch (errorResponse.error.error.message){
                case 'EMAIL_EXISTS':
                      errorMessage = 'This email already exists';
              } 
              return throwError(errorMessage);
            })
        );
    }

    login(email: string, password: string){
        return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjcMosQvGASLG_sdrlfeY_VZd7p6xmcK4',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        
        );

    }
}