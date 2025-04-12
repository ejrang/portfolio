import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { MySkillsSectionComponent } from '../my-skills-section/my-skills-section.component';
import { MyProjectsSectionComponent } from '../my-projects-section/my-projects-section.component';
import { QuotesSectionComponent } from '../quotes-section/quotes-section.component';
import { ContactMeSectionComponent } from '../contact-me-section/contact-me-section.component';
import { FooterComponent } from '../footer/footer.component';
import { WhyMeSectionComponent } from '../why-me-section/why-me-section.component';
import { CommonModule } from '@angular/common';
import { ToggleService } from '../toggle.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, 
     HeroSectionComponent,
     WhyMeSectionComponent ,
     MySkillsSectionComponent,
     MyProjectsSectionComponent,
     QuotesSectionComponent,
     ContactMeSectionComponent,
     FooterComponent,
     CommonModule
    ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  isOpen = inject(ToggleService)

// ngOnInit() {
//   this.isOpen.subscribe(value => {
//     console.log('isOpen:', value);
//   });
// }

 

}
