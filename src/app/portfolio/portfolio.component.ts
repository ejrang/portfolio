import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { WhyMeSectionComponent } from '../why-me-section/why-me-section.component';
import { MySkillsSectionComponent } from '../my-skills-section/my-skills-section.component';
import { MyProjectsSectionComponent } from '../my-projects-section/my-projects-section.component';
import { QuotesSectionComponent } from '../quotes-section/quotes-section.component';
import { ContactMeSectionComponent } from '../contact-me-section/contact-me-section.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, 
     HeroSectionComponent,
     WhyMeSectionComponent, 
     MySkillsSectionComponent,
     MyProjectsSectionComponent,
     QuotesSectionComponent,
     ContactMeSectionComponent,
     FooterComponent
    ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
