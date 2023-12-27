import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseControl } from '../../models/dynamic-form.model';

@Component({
  selector: 'control-base',
  template: '',
  inputs: [
    { name: 'baseControl', required: true },
    { name: 'label', required: true },
    { name: 'tooltip' },
    { name: 'disabled', required: true },
    { name: '_formControl', required: true },
  ],
  styles: [''],
})
export class ControlBase {
  @Input() public baseControl!: BaseControl;

  @Input() public label!: string;

  @Input() public tooltip!: string;

  @Input() public disabled!: boolean;

  @Input() public _formControl!: FormControl;

  constructor() {}
}
