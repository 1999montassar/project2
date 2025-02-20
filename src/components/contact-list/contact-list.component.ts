import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contact {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  editing?: boolean; // Propriété pour activer/désactiver l'édition
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactListComponent {
  contacts: Contact[] = [
    { id: 1, nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@email.com', telephone: '0123456789', editing: false }
  ];

  // Ajouter un contact vide
  ajouterContact() {
    const newContact: Contact = {
      id: this.contacts.length + 1,
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      editing: true // Directement en mode édition
    };
    this.contacts.push(newContact);
  }

  // Passer un contact en mode édition
  modifierContact(contact: Contact) {
    contact.editing = true;
  }

  // Sauvegarder les modifications
  enregistrerContact(contact: Contact) {
    contact.editing = false;
  }

  // Supprimer un contact
  supprimerContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c.id !== contact.id);
  }

  // Consulter un contact (affiche un message pour l'instant)
  consulterContact(contact: Contact) {
    alert(`Consultation du contact : ${contact.nom} ${contact.prenom}\nEmail: ${contact.email}\nTéléphone: ${contact.telephone}`);
  }
}
