import { Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToggleService } from '../toggle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  schemas: [],
  imports:[MobileHeaderComponent,TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../assets/fonts/font.scss']
})
export class HeaderComponent {
   isOpen = inject(ToggleService)
   isSidebarOpen = false;
  
  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang); 
  }

  toggleSidebar(open: boolean) {
    this.isSidebarOpen = open;
  }
  
  // w3_close() {
  //   document.getElementById("mySidebar").style.display = "none";
  // }


}
