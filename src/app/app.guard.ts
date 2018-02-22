import {Injectable} from '@angular/core'
import {Router} from '@angular/router' 
@Injectable()
export class AuthGuard {

  constructor( private router : Router ) {
  }

  canActivate( ) {
      let value = false
    if(value) return true;
    else this.router.navigate(['users']);
    // else navigate to login
  }
}