import { Routes } from '@angular/router';
import { ViewRequestsPage } from './pages/view-requests-page/view-requests-page.component';
import { AddRequestsPageComponent } from './pages/add-requests-page/add-requests-page.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { ViewSpecificRequestComponent } from './pages/view-specific-request/view-specific-request.component';

export const routes: Routes = [
    {
        path: '', component: ViewRequestsPage,
    },
    {
        path: 'new', component: AddRequestsPageComponent,
    },
    {
        path: 'view/:id', component: ViewSpecificRequestComponent,
    },
    {
        path: '404', component: Error404Component,
    },
    {
        path: '500', component: Error500Component,
    },
    {
        path: '**', component: Error404Component,
    },

];
