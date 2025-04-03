import { Component, Output} from '@angular/core';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  schemas: [],
  imports:[MobileHeaderComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../assets/fonts/font.scss']
})
export class HeaderComponent {
  isOpen: boolean = false;

}
