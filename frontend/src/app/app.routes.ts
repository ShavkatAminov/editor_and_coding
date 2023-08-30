import {Routes} from "@angular/router";
import {NoAuthGuard} from "./core/guards/noAuth.guard";
import {AuthGuard} from "./core/guards/auth.guard";
import {MainComponent} from "./core/layout/main/main.component";


export const appRoutes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'home'},
  {
    canActivate: [NoAuthGuard],
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
      },
    ]
  },
  {
    canActivate: [AuthGuard],
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
      }
    ]
  }
]
