import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
{path :'', pathMatch:'full',redirectTo:'home'},
{path:'home',component:HomeComponent},
{path:'profile',pathMatch:'full',component:ProfileComponent},
{path:'chat',pathMatch:'full',component:ChatComponent},
{path:'support',pathMatch:'full',component:SupportComponent},
{path:'settings',pathMatch:'full',component:SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
