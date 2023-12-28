import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-card',
  standalone: true,
  imports: [],
  inputs: [
    {
      name: 'title',
    }
  ],
  templateUrl: './dynamic-card.component.html',
  styleUrl: './dynamic-card.component.scss'
})
export class DynamicCardComponent {

  @Input()
  public title!: string;
}
