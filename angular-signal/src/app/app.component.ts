import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, ChildComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  $value: BehaviorSubject<number> = new BehaviorSubject(0);

  changeValue(): void {
    this.$value.next(Math.floor(Math.random()*10));
  }
}
