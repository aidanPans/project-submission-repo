import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { MeetingComponent } from './meeting/meeting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:"client", component:ClientComponent},
  {path:"login", component:LoginComponent},
  {path:"meeting", component:MeetingComponent},
  {path:"home", component:DashboardComponent},
  {path:"admin_home", component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
