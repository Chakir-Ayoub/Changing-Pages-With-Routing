import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/Observable';
export interface CanComponentDeactivate{
  canDeactivated:()=>Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivatedGuard implements CanDeactivate<CanComponentDeactivate>{
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |

                boolean {
                    return component.canDeactivated();
                }


  }
