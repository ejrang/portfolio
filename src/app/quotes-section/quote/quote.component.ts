import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {

  quote: {name: string; project: string; text: string; }[] = [
    {
      name: 'Oscar Ahlke',
      project: 'Project Join',
      text: 'comment.commentNoah',
    },
    {
      name: 'Patrick Offermanns',
      project: 'Project Join',
      text: 'comment.commentEveln',
    },
    {
      name: 'Sebastian Scoverik',
      project: 'Project Join',
      text: 'comment.commentJames',
    }
  ];
}
