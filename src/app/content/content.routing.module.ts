import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '@app/content/list/list.component';
import { NewComponent } from '@app/content/new/new.component';
import { DetailComponent } from '@app/content/detail/detail.component';
import { AuthGuard } from '@app/guards/auth-guard';

const routes: Routes = [
    {
        path: 'content',
        component: ListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'content/new',
        component: NewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'content/:position',
        component: DetailComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContentRoutingModule { }
