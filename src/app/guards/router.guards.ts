import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterGuards implements CanActivate {
  

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let currentUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (currentUser && currentUser.token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
