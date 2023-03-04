import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;
  changedSaved=false;
  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //this.route.fragment.subscribe();
    this.route.queryParams.
    subscribe((queryParams:Params)=>{
      this.allowEdit=queryParams['allowEdit'] == 1 ? true : false
    });
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changedSaved=true;
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  canDeactivated(): Observable<boolean> | Promise<boolean>|boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !==this.server.name || this.serverStatus!==this.server.status)&&
    !this.changedSaved){
      return confirm('Do you want to discard the changes?');
    }
  }
}
