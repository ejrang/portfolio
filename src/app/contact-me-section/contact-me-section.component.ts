import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule,FormsModule,TranslateModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {
  privacyPolicy = false;
  http = inject(HttpClient);

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
  endPoint: 'https://ejran-nahimzadah.developerakademie.net/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};

onSubmit(ngForm: NgForm) {

  
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    console.log("Läuft");
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {

          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    ngForm.resetForm();
  }
}

}
