import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Response } from '../_models/index';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    private userInfo = 'userInfo';
    constructor(private http: HttpClient, private router: Router) {
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(this.userInfo);
        if (token) {
            return true;
        } else {
            return true;
        }
    }

    removeLocalStorage(): void {
        localStorage.clear();
    }

    setUser(userdata: JSON): void {
        localStorage.setItem(this.userInfo, JSON.stringify(userdata));
    }
}
