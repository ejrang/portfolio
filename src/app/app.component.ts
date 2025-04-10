import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TranslateModule } from '@ngx-translate/core';
import {TranslateService} from "@ngx-translate/core";
import AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioComponent,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
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
