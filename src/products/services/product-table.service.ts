import { Injectable } from '@angular/core';
import { TableConfig } from '../../dynamic-components/models/dynamic-table.model';

@Injectable()
export class ProductTableService {

  public tableConfig: TableConfig = {
    columns: [
      {
        headerText: 'Logo',
        key: 'logo',
        mask: 'logo',
        sticky: 'left',
      },
      {
        headerText: 'Nombre del producto',
        key: 'productName',
      },
      {
        headerText: 'Descripción',
        key: 'description',
      },
      {
        headerText: 'Fecha de liberación',
        key: 'date1',
        mask: 'date',
      },
      {
        headerText: 'Fecha de reestructuración',
        key: 'date2',
        mask: 'date',
      }
    ],
    id: 'tabla1',
    rows: [

      {
        id: '1',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '2',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '3',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '4',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '5',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '6',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '7',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '8',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '9',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '10',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '11',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '12',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '13',
        logo: 'ST',
        productName: 'Seguro Todo Riesgo',
        description: 'Este seguro cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      }
    ],
    options: {
      actions: {
        delete: true,
        edit: true
      },
      filter: true
    }
  }
}






	
	
	
	
	
	
	

	
	
	