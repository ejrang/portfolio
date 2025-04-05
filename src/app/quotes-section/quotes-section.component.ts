import { Component } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quotes-section',
  standalone: true,
  imports: [QuoteComponent,TranslateModule],
  templateUrl: './quotes-section.component.html',
  styleUrl: './quotes-section.component.scss'
})
export class QuotesSectionComponent {

}
