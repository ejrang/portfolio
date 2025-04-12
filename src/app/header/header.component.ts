import { Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-header',
  standalone: true,
  schemas: [],
  imports:[MobileHeaderComponent,TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../assets/fonts/font.scss']
})
export class HeaderComponent {
   isOpen = inject(ToggleService)
  
  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang); 
  }


}
