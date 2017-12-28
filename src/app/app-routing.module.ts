import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '@app/content/list/list.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { ContactsComponent } from '@app/contacts/contacts.component';
import { LoginComponent } from '@app/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'content', component: ListComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
