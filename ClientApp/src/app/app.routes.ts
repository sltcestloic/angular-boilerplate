import { Routes } from '@angular/router';
import { PathEnum } from '../angular-framework/enums/path-enum';

export const routes: Routes = [
    {
        path: PathEnum.Root,
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    }
];
