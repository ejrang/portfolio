import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {
  @Output() isOpen = new EventEmitter<boolean>();

  close(){
    this.isOpen.emit(false);
  }
}
