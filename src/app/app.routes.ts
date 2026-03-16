import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'about', loadComponent: () => import('./pages/about/about-page') },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing-page') },
  { path: 'contract', loadComponent: () => import('./pages/contract/contract-page') },
  {
    path: '**',
    redirectTo: () => {
      //const authService=inject(AuthService)
      return 'about';
    },
  },
];
