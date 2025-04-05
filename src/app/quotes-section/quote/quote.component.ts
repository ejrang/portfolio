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
      name: 'Noah Mueller',
      project: 'Project Shakie',
      text: 'comment.commentNoah',
    },
    {
      name: 'Evelyn Marx',
      project: 'Project El Pollo Loco',
      text: 'comment.commentEveln',
    },
    {
      name: 'James Rugman',
      project: 'Project Join',
      text: 'comment.commentJames',
    }
  ];
}
