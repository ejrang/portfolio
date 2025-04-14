import { Component } from '@angular/core';
import { MyProjectsSectionComponent } from '../my-projects-section.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { animation } from '@angular/animations';


@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.scss',
})
export class ProjectComponentComponent {

navigateTo(url: string | URL | undefined) {
window.open(url);
}

  project = [
    {
      img: './assets/icons/myProjects/join.png',
      name: 'Join',
      skills: 'Angular |  TypeScript |  HTML | CSS',
      text: 'myProjects.joinDescription',
      gitHub: 'https://github.com/OAhlke1/join',
      liveTest:'https://join-249.developerakademie.net/board.html',
      animation: 'fade-up-right',
    },
    {
      img: './assets/icons/myProjects/elPolloLoco.png',
      name: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      text: 'myProjects.elPolloLocoDescription',
      gitHub: 'https://github.com/ejrang/EL-Pollo-Loco',
      liveTest:'https://join-249.developerakademie.net/board.html',
      animation: 'fade-up-left',
    },
    {
      img: './assets/icons/myProjects/elPolloLoco.png',
      name: 'Pokedex',
      skills: 'JavaScript | HTML |CSS',
      text: 'myProjects.pokedexDescription',
      gitHub: 'https://github.com/ejrang/Testprojekt/tree/main/Pokedex',
      liveTest:'https://join-249.developerakademie.net/board.html',
      animation: 'fade-up-right',
    }
  ];
}
