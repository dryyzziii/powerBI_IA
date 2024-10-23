import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputSearchBarComponent } from './components/inputs/input-search-bar/input-search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputSearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'powerBI_IA';
}
