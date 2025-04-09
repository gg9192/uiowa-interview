import { Routes } from '@angular/router';
import { ViewRequestsPage } from './pages/view-requests-page/view-requests-page.component';
import { AddRequestsPageComponent } from './pages/add-requests-page/add-requests-page.component';

export const routes: Routes = [
    {
        path: '', component: ViewRequestsPage,
    },
    {
        path: 'new', component: AddRequestsPageComponent,
    }

];
