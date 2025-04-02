import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {
 closeHeader = document.querySelector('.close');
 header = document.querySelector(".mobile-header")

 close(){
this.header?.classList.add('d-none');
 }
}
