import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Injectable, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToggleService } from '../../toggle.service';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})

export class MobileHeaderComponent {
  @Output() isOpen = new EventEmitter<boolean>();
  // isOpen = inject(ToggleService)
  isClosing = false;

constructor( private translate: TranslateService) {
}

  close() {
    this.isClosing = true; // Schließen-Animation starten
    // setTimeout(() => {
      this.isOpen.emit(false);
      debugger; // Nach der Animation die Komponente schließen
      this.isClosing = false; // Zustand zurücksetzen
    // }, 500); // Dauer der Animation (0.5s)
    // this.isOpen.isOpen = false; // Zustand zurücksetzen
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
