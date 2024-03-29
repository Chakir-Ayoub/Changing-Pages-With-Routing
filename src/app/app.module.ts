import { ServerResolver } from './servers/server/server-resolver.service';
import { CanDeactivatedGuard } from './servers/edit-server/can-deactivate-guard.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { RoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { ErrorPageComponent } from './error-page/error-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoudComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ServersService,AuthGuard,AuthService,CanDeactivatedGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
