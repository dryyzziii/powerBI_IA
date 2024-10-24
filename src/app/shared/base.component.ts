import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [MenuComponent, LottieComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/emptyChoices.json',
    loop: true,
    autoplay: true
  };

}
