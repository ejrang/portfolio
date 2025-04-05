import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills-section',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './my-skills-section.component.html',
  styleUrl: './my-skills-section.component.scss'
})
export class MySkillsSectionComponent {

 img = [
'./assets/icons/mySkills/Angular.png',
'./assets/icons/mySkills/TypeScript.png',
'./assets/icons/mySkills/JavaScript.png',
'./assets/icons/mySkills/html.png',
'./assets/icons/mySkills/css.png',
'./assets/icons/mySkills/Api.png',
'./assets/icons/mySkills/Firebase.png',
'./assets/icons/mySkills/git.png',
'./assets/icons/mySkills/Scrum.png',
'./assets/icons/mySkills/materialDesign.png',
'./assets/icons/mySkills/Challangeme.png',
]

 p =[
  'Angular',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Rest-API',
  'Firebase',
  'Git',
  'Scrum',
  'Material Design',
  'Challangeme',
 ]

}

