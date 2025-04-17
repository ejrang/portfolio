import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
 isOpen: boolean = false;
 isClosing = false;

 close() {
  if(!this.isOpen){
  // document.body.style.overflow = 'hidden';
}

  if(this.isOpen){
    document.body.style.overflow = '';
   this.isClosing = true; // Schließen-Animation starten
   setTimeout(() => {
    // this.isOpen.emit(false);
     this.isClosing = false; // Zustand zurücksetzen
   }, 500); // Dauer der Animation (0.5s)
  this.isOpen = false; // Zustand zurücksetzen
  }
}

scrollToContact() {
  const contactElement = document.getElementById('contact');
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
}

}
 