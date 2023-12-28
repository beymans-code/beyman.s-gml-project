import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  standalone: true,
  imports: [],
  inputs: [
    { name: 'label' },
    { name: 'icon' },
    { name: 'disabled' },
  ],
  outputs: ['action'],
  templateUrl: './dynamic-button.component.html',
  styleUrl: './dynamic-button.component.scss'
})
export class DynamicButtonComponent {
  @Input()
  public label: string | undefined;

  @Input()
  public icon: string | undefined;

  @Input()
  public disabled: boolean;

  @Input()
  public type: 'fab' | 'default' | undefined;

  @Input()
  public color: 'dark' | 'light' | undefined;

  @Output()
  public action: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
    this.disabled = false;
  }
}
