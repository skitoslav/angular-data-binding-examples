import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRouteEnum } from '../libs/shared/enums/navigation/application';

const routes: Routes = [
  {
    path: ApplicationRouteEnum.DASHBOARD,
    loadComponent: () => import('../libs/dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: ApplicationRouteEnum.ANGULAR,
    loadComponent: () => import('../libs/default-angular-page/default-angular-page.component').then(c => c.DefaultAngularPageComponent)
  },
  {
    path: ApplicationRouteEnum.USERS,
    loadComponent: () => import('../libs/users/users.component').then(c => c.UsersComponent)
  },
  {
    path: ApplicationRouteEnum.IN_DEVELOPMENT,
    loadComponent: () => import('../libs/shared/in-development/in-development.component').then(c => c.InDevelopmentComponent)
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
