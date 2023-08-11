import {Routes} from "@angular/router";
import {NoAuthGuard} from "./core/guards/noAuth.guard";
import {AuthGuard} from "./core/guards/auth.guard";


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
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      }
    ]
  }
]
