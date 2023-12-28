import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { TableConfig } from '../../models/dynamic-table.model';
import { BaseControl } from '../../models/dynamic-form.model';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DynamicCardComponent } from '../dynamic-card/dynamic-card.component';
import { CommonModule } from '@angular/common';
import { DynamicButtonComponent } from '../dynamic-button/dynamic-button.component';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, DynamicCardComponent, DynamicButtonComponent],
  inputs: [
    {
      name: 'tableConfig',
      required: true
    }
  ],
  outputs: [
    'edit',
    'add',
    'dataChange'
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

  @Output()
  public edit: EventEmitter<object> = new EventEmitter<object>();

  @Output()
  public add: EventEmitter<object> = new EventEmitter<object>();

  @Output()
  public dataChange: EventEmitter<object[]> = new EventEmitter<object[]>();

  @ViewChild('container')
  public container!: ElementRef;

  @ViewChild('searchForm')
  public searchForm!: DynamicFormComponent;

  public controls: BaseControl[];

  public filteredData: object[] = [];

  public scrollLef: number | undefined;

  public _tableConfig!: TableConfig;

  public currentEditRow: number | undefined;

  public lastEditRowIndex: number | undefined;

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
    this._setDataSource();
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

  public delete(index: number) {
    this.closeMenu(index)

    setTimeout(() => {
      const idx = this._tableConfig.rows.findIndex(row => this.getCell(row, 'index') === index)
      console.log(this._tableConfig.rows);
      this._tableConfig.rows.splice(idx, 1);
      const value = this.searchForm.formGroup?.value || '';
      this.search(value);
      this.dataChange.emit(this._tableConfig.rows)
    }, 300);
  }

  public startEditRow(rowIndex: number) {
    this.lastEditRowIndex = rowIndex;
    this.closeMenu(rowIndex)
    const idx = this._tableConfig.rows.findIndex(row => this.getCell(row, 'index') === rowIndex)
    this.edit.emit(
      this._tableConfig.rows[idx]
    )
  }

  closeMenu(rowIndex: number) {
    document.getElementById('buttons-container' + rowIndex)?.classList.add('close');
    setTimeout(() => {
      this.currentEditRow = undefined;
    }, 300);
  }

  public addRows(rows: object[]) {
    if (this._tableConfig?.rows) {
      this._tableConfig.rows = [
        ...this._tableConfig.rows,
        ...rows,
      ]
      this._setDataSource();
    }
  }

  private _setDataSource() {
    const rows = this._tableConfig?.rows.map((row, index) => ({
      ...row,
      index
    }))
    this._tableConfig = {
      ...this._tableConfig,
      rows
    }
    const value = this.searchForm.formGroup?.value || '';
    this.search(value);
    this.dataChange.emit(this._tableConfig.rows)
  }

  public editRow(_row: any, index?: number) {
    console.log(_row, index, 'alv');

    if (this.lastEditRowIndex !== undefined || index !== undefined) {
      const idx = this._tableConfig.rows.findIndex(row => this.getCell(row, 'index') === index || this.lastEditRowIndex)
      console.log(idx);

      this._tableConfig.rows[idx] = _row;
      this._setDataSource();
      this.lastEditRowIndex = undefined;
    }
  }

}
