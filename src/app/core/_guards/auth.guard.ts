import { LoginService } from '../_services/index';
import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _loginService: LoginService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this._loginService.isAuthenticated()) {
            return true;
        }
        
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }
}
