import { Component } from '@angular/core';
import { ExampleComponent } from '../../components/example/example.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExampleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
