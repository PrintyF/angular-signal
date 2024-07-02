import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'child',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input('name') name: string = '';
  @Input('value') value: number = 0;

  changeValue(): void {
    this.value = Math.floor(Math.random() * 1000);
  }
}
