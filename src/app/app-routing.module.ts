import { ServerResolver } from './servers/server/server-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivatedGuard } from './servers/edit-server/can-deactivate-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoudComponent } from "./page-not-foud/page-not-foud.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { AuthGuard } from './auth-guard.service';

const appRoutes:Routes=[
  {path:'',component: HomeComponent},
  {path:'user',component: UsersComponent,children:[
    {path:':id/:name',component:UserComponent},
  ]},

  {
    path:'servers',
    canActivateChild:[AuthGuard],
    component:ServersComponent,children:[
    {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivatedGuard]},
    {path:':id',component:ServerComponent,resolve:{server: ServerResolver}}
  ]},

  //{path:'not-found',component:PageNotFoudComponent},
  {path:'not-found',component:ErrorPageComponent,data:{message:'Page not found'}},
  {path:'**',redirectTo:'not-found',pathMatch:'full'}

]
@NgModule({
imports:[
  RouterModule.forRoot(appRoutes)
],
exports:[RouterModule]
})
export class RoutingModule{

}
