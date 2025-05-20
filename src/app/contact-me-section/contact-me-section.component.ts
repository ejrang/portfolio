import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule,FormsModule,TranslateModule,RouterLink],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {
  privacyPolicy = false;
  http = inject(HttpClient);
  emailSubmitted: boolean = false;

  nameTouched: boolean = false;
  emailTouched = false;

onBlurEmail() {
  this.emailTouched = true;
}

contactData: any ={
  name: '',
  email: '',
  message: ''
}

mailTest = true;

post = {
  endPoint: 'https://ejran-nahimzadah.com/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};

onSubmit(ngForm: NgForm) {
  // if (ngForm.submitted && ngForm.form.valid) {
    console.log("Läuft");
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.confirmMessage()
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  // }
  //  else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
  //   ngForm.resetForm();
  //   
  // }


}

confirmMessage(){
  this.emailSubmitted = true;

  // Nachricht nach 4.5 Sekunden ausblenden
  setTimeout(() => {
    const notificationElement = document.querySelector('.notification');
    if (notificationElement) {
      notificationElement.classList.add('fade-out'); // Klasse für Animation hinzufügen
    }
  }, 450); // 4.5 Sekunden warten, bevor die Animation startet

  // Nachricht nach 5 Sekunden entfernen
  setTimeout(() => {
    this.emailSubmitted = false;
  }, 2000); // 5 Sekunden warten, bevor die Nachricht entfernt wird
  
}

}


