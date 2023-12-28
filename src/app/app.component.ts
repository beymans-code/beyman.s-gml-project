import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from '../dynamic-components/components/dynamic-form/dynamic-form.component';
import { BaseControl } from '../dynamic-components/models/dynamic-form.model';
import { DynamicTableComponent } from '../dynamic-components/components/dynamic-table/dynamic-table.component';
import { TableConfig } from '../dynamic-components/models/dynamic-table.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DynamicFormComponent, DynamicTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'beyman.s-gml-project';

  public controls: BaseControl[] = [
    {
      key: 'descripcion',
      label: 'Descripción',
      type: 'Input',
      col: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
      },
      _input_placeholder: 'Ingresa la descripción',
      _validator_required: true,
      _validator_maxLength: 2,
      _validator_minLength: 2
    },
    {
      key: 'fecha',
      label: 'Fecha',
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
      _input_placeholder: 'Selecciona la fecha',
      _validator_required: true,
    },
    {
      key: 'correo',
      label: 'Correo',
      type: 'Input',
      col: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
      },
      _input_type: 'email',
      _input_placeholder: 'Ingresa el correo electrónico',
      _validator_required: true,
    },
  ];

  public tableConfig: TableConfig = {
    columns: [
      {
        headerText: 'Logo',
        key: 'logo',
        mask: 'logo',
        sticky: 'left',
      },
      {
        headerText: 'Nombre',
        key: 'name',
      },
      {
        headerText: 'Fecha',
        key: 'date',
        mask: 'date',
      },
      {
        headerText: 'Logo 2',
        key: 'logo2',
        mask: 'logo',
      }
    ],
    id: 'tabla1',
    rows: [
      {
        logo: 'af',
        name: 'Andres Fernando',
        date: '21/04/2023',
        logo2: '2'
      },
      {
        logo: 'jl',
        name: 'Juan Lopez',
        date: '22/03/2023',
        logo2: '4'
      },
      {
        logo: 'bm',
        name: 'Beyman Lopez',
        date: '21/05/2023',
        logo2: '3'
      },
      {
        logo: 'dg',
        name: 'Deiby guaza',
        date: '02/10/2023',
        logo2: '8'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },

      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },

      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },

      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
      {
        logo: 'cg',
        name: 'Cristian guaza',
        date: '29/05/2023',
        logo2: '9'
      },
    ],
    options: {
      actions: {
        delete: true,
        edit: true
      },
      filter: true
    }
  }

  public formValue(value: object) {
    console.log(value);
  }
}
