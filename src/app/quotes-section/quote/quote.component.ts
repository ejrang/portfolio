import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {

  quote: {name: string; project: string; text: string; }[] = [
    {
      name: 'Noah Mueller',
      project: 'Project Shakie',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      name: 'Evelyn Marx',
      project: 'Project El Pollo Loco',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      name: 'James Rugman',
      project: 'Project Join',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.',
    }
  ];
}
