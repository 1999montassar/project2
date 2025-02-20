import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default redirection to Home

  { 
    path: 'home', 
    component: HomeComponent, 
    children: [
      { path: 'contacts', component: ContactListComponent }, // Child route for contacts
    ] 
  }, // Home route with children

  { 
    path: 'contacts', 
    component: ContactListComponent 
  }, // Standalone route for contacts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importing routes into the application
  exports: [RouterModule] // Exporting RouterModule for use in other modules
})
export class AppRoutingModule {} // You need to declare a class here
