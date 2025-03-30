import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {
contactData: any ={
  name: '',
  email: '',
  message: ''
}

onsubmit() {
console.log(this.contactData);

}

}
