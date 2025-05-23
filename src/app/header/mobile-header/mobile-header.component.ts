import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Injectable, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToggleService } from '../../toggle.service';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})

export class MobileHeaderComponent {
  // @Output() isOpen = new EventEmitter<boolean>();
  isOpen = inject(ToggleService)


constructor( private translate: TranslateService) {
}


  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
