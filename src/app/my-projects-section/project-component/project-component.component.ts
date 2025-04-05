import { Component } from '@angular/core';
import { MyProjectsSectionComponent } from '../my-projects-section.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.scss',
})
export class ProjectComponentComponent {
  project = [
    {
      img: './assets/icons/myProjects/join.png',
      name: 'Join',
      skills: 'Angular |  TypeScript |  HTML | CSS',
      text: 'myProjects.joinDescription',
    },
    {
      img: './assets/icons/myProjects/elPolloLoco.png',
      name: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      text: 'myProjects.elPolloLocoDescription',
    },
    {
      img: './assets/icons/myProjects/elPolloLoco.png',
      name: 'Pokedex',
      skills: 'JavaScript | HTML |CSS',
      text: 'myProjects.pokedexDescription',
    }
  ];
}
