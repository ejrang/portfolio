import { Component } from '@angular/core';
import { ProjectComponentComponent } from './project-component/project-component.component';

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [ProjectComponentComponent],
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {

}
