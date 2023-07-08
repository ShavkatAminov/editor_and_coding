import {Routes} from "@angular/router";


export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
      }
    ]
  }
]
