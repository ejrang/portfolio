import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent  implements AfterViewInit {
  @ViewChild('typedTitle') typedTitle!: ElementRef;
  @ViewChild('typedName') typedName!: ElementRef;

  ngAfterViewInit(): void {
    const titleOptions = {
      strings: ['FRONTEND DEVELOPER'],
      typeSpeed: 40,
      startDelay: 0,
      showCursor: false,
      onComplete: () => {
        // Starte den zweiten Typing Effekt, wenn der erste fertig ist
        new Typed(this.typedName.nativeElement, nameOptions);
      }
    };

    const nameOptions = {
      strings: ['EJRAN NAHIMZADAH'],
      typeSpeed: 30,
      startDelay: 300,
      showCursor: false,
    };

    new Typed(this.typedTitle.nativeElement, titleOptions);
  }
}