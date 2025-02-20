import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  deconnexion(event: Event) {
    event.preventDefault(); // Empêche le rechargement par défaut si on utilise <a>

    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
      localStorage.removeItem('userToken'); // Supprime le token de session
      this.router.navigate(['/home']).then(() => {
        window.location.reload(); // Recharge la page pour vider les données en mémoire
      });
    }
  }
}
