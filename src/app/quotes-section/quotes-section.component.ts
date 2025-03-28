import { Component } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';

@Component({
  selector: 'app-quotes-section',
  standalone: true,
  imports: [QuoteComponent],
  templateUrl: './quotes-section.component.html',
  styleUrl: './quotes-section.component.scss'
})
export class QuotesSectionComponent {

}
