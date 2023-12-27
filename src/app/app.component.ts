import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from '../dynamic-components/components/dynamic-form/dynamic-form.component';
import { BaseControl } from '../dynamic-components/models/dynamic-form.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'beyman.s-gml-project';

  public controls: BaseControl[] = [
    {
      key: 'text',
      label: 'Texto',
      type: 'Input',
      col: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
      },
      _input_placeholder: 'Placeholder',
    },
    {
      key: 'text2',
      label: 'Texto 2',
      type: 'Input',
      col: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
      },
      _input_type: 'date',
      _input_placeholder: 'Placeholder 2',
    },
    {
      key: 'text3',
      label: 'Texto 3',
      type: 'Input',
      col: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
      },
      _input_placeholder: 'Placeholder 3',
    },
  ];

  public formValue(value: object) {
    console.log(value);
  }
}
