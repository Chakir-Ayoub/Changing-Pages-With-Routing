import { Injectable } from '@angular/core';
import { ServersService } from './../servers.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

interface Server{
  id:number;
  name:string;
  status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server>{
  constructor(private serverService: ServersService){}
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<Server> | Promise<Server> | Server{
    return this.serverService.getServer(+route.params['id']);
  }
}
