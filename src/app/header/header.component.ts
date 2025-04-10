import { Component, Output} from '@angular/core';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  schemas: [],
  imports:[MobileHeaderComponent,TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../assets/fonts/font.scss']
})
export class HeaderComponent {
  isOpen: boolean = false;

  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang); 
  }


}
