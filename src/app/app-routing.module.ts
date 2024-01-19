import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRouteEnum } from '../libs/shared/enums/navigation/application';

const routes: Routes = [
  {
    path: ApplicationRouteEnum.DASHBOARD,
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: ApplicationRouteEnum.ANGULAR,
    loadComponent: () => import('./default-angular-page/default-angular-page.component').then(c => c.DefaultAngularPageComponent)
  },
  {
    path: ApplicationRouteEnum.USERS,
    loadComponent: () => import('../libs/users/users.component').then(c => c.UsersComponent)
  },
  {
    path: '**',
    redirectTo: ApplicationRouteEnum.DASHBOARD
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
