import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Response } from '../_models/index';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppUserAuth } from '../_helper/app-user-auth';
@Injectable()
export class CommanService {
    
    securityObject: AppUserAuth = new AppUserAuth();

    constructor(private http: HttpClient, private router: Router) {
    }

    getAuthNToken(): Observable<Response> {
        return this.http.post<Response>(environment.baseAPIUrl + '/appauthenticate', '', {
            headers: new HttpHeaders({
                'appsecretkey': environment.appSecretKey,
                'Content-Type': 'application/json'
            })
        });
    }
    
    validateReCaptcha(pdata: any): Observable<Response> {
        return this.http.post<Response>(environment.baseAPIUrl + '/validateReCaptcha', pdata);
    }
}
