import { Injectable } from '@angular/core';
import { TableConfig } from '../../dynamic-components/models/dynamic-table.model';

/**
 * Servicio de la tabla.
 */
@Injectable()
export class ProductTableService {

  /**
   * Configuracion inical de la tabla.
   */
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
        logo: 'SR',
        productName: 'Seguro todo riesgo',
        description: 'Cubre accidentes de transito...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '2',
        logo: 'SA',
        productName: 'Seguro de auto',
        description: 'Cubre tu vehiculo...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '3',
        logo: 'SM',
        productName: 'Seguro moto',
        description: 'Cubre tu moto...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '4',
        logo: 'SV',
        productName: 'Seguro vida',
        description: 'Cubre tus necesidades...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '5',
        logo: 'SC',
        productName: 'Seguro movil',
        description: 'Cubre tu celular...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '6',
        logo: 'ST',
        productName: 'Seguro trabajo',
        description: 'Cubre accidentes laborales...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '7',
        logo: 'SP',
        productName: 'Seguro mascotas',
        description: 'Cubre tu mascota...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '8',
        logo: 'SH',
        productName: 'Seguro vivienda',
        description: 'Cubre tu casa...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '9',
        logo: 'SA',
        productName: 'Seguro viajes',
        description: 'Cubre tus viajes...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '10',
        logo: 'SS',
        productName: 'Seguro salud',
        description: 'Cubre tu salud...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '11',
        logo: 'SX',
        productName: 'Seguro pertenencias',
        description: 'Cubre tus pertenencias...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '12',
        logo: 'SR',
        productName: 'Seguro robo',
        description: 'Ce cubre en caso de tobo...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '13',
        logo: 'SY',
        productName: 'Seguro general',
        description: 'Cubre varios aspectos de tu vida...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
      {
        id: '14',
        logo: 'S1',
        productName: 'Seguro mascotas premium',
        description: 'Cubre tu mascota (mayores beneficios)...',
        date1: '2023-12-13',
        date2: '2023-12-13'
      },
    ],
    options: {
      actions: {
        delete: true,
        edit: true
      },
      filter: true,
      rowId: 'id',
    }
  }
}






	
	
	
	
	
	
	

	
	
	