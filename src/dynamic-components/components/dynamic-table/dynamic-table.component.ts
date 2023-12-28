import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { TableConfig } from '../../models/dynamic-table.model';
import { BaseControl } from '../../models/dynamic-form.model';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DynamicCardComponent } from '../dynamic-card/dynamic-card.component';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [DynamicFormComponent, DynamicCardComponent],
  inputs: [
    {
      name: 'tableConfig',
      required: true
    }
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements AfterViewInit {

  @Input()
  public set tableConfig(value: TableConfig | undefined) {
    if (value) {
      this._tableConfig = value
      this.filteredData = value.rows;
      if (value.options?.actions) {
        this._tableConfig.columns.push({
          key: 'actions',
          headerText: '',
          sticky: 'right'
        });
      }
    };
  }

  @ViewChild('container')
  public container!: ElementRef;

  public controls: BaseControl[];

  public filteredData: object[] = [];

  public scrollLef: number | undefined;

  public _tableConfig!: TableConfig;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.scroll(this.container.nativeElement);
    this.cdRef.detectChanges();
  }

  constructor(private cdRef: ChangeDetectorRef) {
    this.controls = [
      {
        key: 'buscar',
        label: '',
        type: 'Input',
        col: {
          xxl: 12,
          xl: 12,
          lg: 12,
          md: 12,
          sm: 12,
          xs: 12,
        },
        _input_placeholder: 'Buscar',
      },
    ]
    this.scrollLef = undefined;
  }

  public trackByIndex = (index: number, item: object) => index;

  public ngAfterViewInit(): void {
    console.log(this.container);

    this.scroll(this.container.nativeElement);
    this.cdRef.detectChanges();
  }

  public objectIterable(obj: any) {
    return Object.keys(obj).map((key: string) => [key, obj[key]])
  }

  public scroll(event: any) {
    if (event.clientWidth < event?.scrollWidth) {
      const valor = event.scrollLeft > 0 ? event?.scrollLeft + event.clientWidth : event?.scrollLeft;
      const total = event?.scrollWidth;
      this.scrollLef = (valor / total) * 100;
    } else {
      this.scrollLef = undefined;
    }
  }

  public search(value: any) {
    const filterValue: string = value['buscar'] || '';
    this.filteredData = this._tableConfig.rows.filter(row => {
      return this.objectIterable(row).map(column => {
        return column[1]
      }).join(' ').toString().toLowerCase().includes(filterValue.toLowerCase())
    })
  }

  public getCell(row: any, key: string) {
    return row[key];
  }
}
