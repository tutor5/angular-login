import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthenticatedGuard } from './services/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'balance',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [
      AuthenticatedGuard
    ],
    children: [
      {
        path: 'balance',
        component: AccountComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ]
  },
  {
    path:'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
