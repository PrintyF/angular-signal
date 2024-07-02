import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
