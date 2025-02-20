import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Ajout de RouterOutlet
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    ContactListComponent,
    RouterOutlet // Ajout de RouterOutlet pour gérer le routage
  ]
})
export class AppComponent {
  title = 'gestion-contacts';
}
