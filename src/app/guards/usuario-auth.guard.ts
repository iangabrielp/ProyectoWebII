import { CanActivateFn } from '@angular/router';

export const usuarioAuthGuard: CanActivateFn = (route, state) => {
  if(typeof window!=='undefined' && window.localStorage){
    if(localStorage.getItem("usuario")=="true"){
      return true;
    } else {
      return false;
    }
  }
  return false;
};
