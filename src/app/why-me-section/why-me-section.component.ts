import { Component, Inject, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-why-me-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './why-me-section.component.html',
  styleUrl: './why-me-section.component.scss'
})
export class WhyMeSectionComponent {
inject = inject(ToggleService)

}
