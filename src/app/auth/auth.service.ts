import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interface } from 'readline';

interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
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
        );
    }
}