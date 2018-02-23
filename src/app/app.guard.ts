import {Injectable} from '@angular/core'
import {Router,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router' 
@Injectable()
export class AuthGuard {

  constructor( private router : Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
      let value = false
    if(value) {
      return true;
    }
    else {
      console.log("state url is " + state.url)
      this.router.navigate(['users']);
      return false;
      //return false;
      //this.router.navigate(['/users']);
    }
    // else navigate to login
  }
  
}