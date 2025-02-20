import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AppComponent } from './app/app.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default redirection to Home
  { path: 'home', component: HomeComponent }, // Route vers la page d'accueil
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

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Provide router for managing routes
  ]
}).catch(err => console.error(err));
