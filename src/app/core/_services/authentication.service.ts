import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environments";
import { Response } from "../../../app/core/_models/response";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    private userInfo = "userInfo";

    private authNToken = localStorage.getItem("AuthNToken");

    // private headers = new HttpHeaders({
    //     "content-type": "application/json",
    //     "authntoken": environment.authntoken
    // });
    private headers = new HttpHeaders()
        //.set('content-type', 'application/json')
        .set('authntoken', environment.authntoken);
    constructor(public http: HttpClient, private router: Router) { }

   
    
    isAuthenticated(): boolean {
        const token = localStorage.getItem(this.userInfo);
        if (token) {
            return true;
        } else {
            return false;
        }
    }

    removeLocalStorage(): void {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
    }

    setUser(userdata: JSON): void {
        localStorage.setItem(this.userInfo, btoa(JSON.stringify(userdata)));
    }
}
