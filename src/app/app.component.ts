import { AfterViewInit, Component, inject } from '@angular/core';
import { ToggleService } from './toggle.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TranslateModule } from '@ngx-translate/core';
import {TranslateService} from "@ngx-translate/core";
import AOS from 'aos';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioComponent,TranslateModule,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  headerIsOpen: boolean = false;
  // public isOpen: boolean = false;
isOpen = inject(ToggleService)


  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    
    const savedLang = localStorage.getItem('language');
    const browserLang = this.translate.getBrowserLang();
  
    const defaultLang = savedLang || browserLang || 'en';
  
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

   useLanguage(language: string): void {
    this.translate.use(language);
}

ngAfterViewInit() {
  AOS.init({
    duration: 1000,
    once: false, // 👈 wichtig! Damit AOS bei jedem Scroll triggert
  });

  AOS.refresh();
}

}
