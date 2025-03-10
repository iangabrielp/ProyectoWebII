import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  if(typeof window!=='undefined' && window.localStorage){
    if(localStorage.getItem("admin")=="true"){
      return true;
    } else {
      return false;
    }
  }
  return false;
};
