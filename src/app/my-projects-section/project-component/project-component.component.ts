import { Component } from '@angular/core';

@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.scss'
})
export class ProjectComponentComponent {

   project = [
    {
      img: './assets/icons/myProjects/join.png',
      name: 'Join',
      skills: 'Angular, TypeScript, HTML, CSS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      img: './assets/icons/myProjects/elPolloLoco.png',
      name: 'El Pollo Loco',
      skills: 'JavaScript, HTML, CSS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      img: './assets/icons/myProjects/elPolloLoco.png',
      name: 'Pokedex',
      skills: 'JavaScript, HTML, CSS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.',
    }
  ];
}
