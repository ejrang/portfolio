import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TranslateModule } from '@ngx-translate/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioComponent,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang() || "en");
  }

   useLanguage(language: string): void {
    this.translate.use(language);
}


}
