import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'child',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input('name') name: string = ''; 
  @Input('value') value: BehaviorSubject<number> | null = null;

  changeValue(): void {
    this.value?.next(Math.random()*10);
  }
}
