import { Component } from '@angular/core';
import { ProjectChoicesComponent } from '../project-choices/project-choices.component';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [ProjectChoicesComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
