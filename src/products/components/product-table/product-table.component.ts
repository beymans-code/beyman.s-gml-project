import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DynamicTableComponent } from '../../../dynamic-components/components/dynamic-table/dynamic-table.component';
import { TableConfig } from '../../../dynamic-components/models/dynamic-table.model';
import { ProductTableService } from '../../services/product-table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { addItem, getItem, removeItem } from '../../services/storage';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [DynamicTableComponent],
  providers: [
    ProductTableService
  ],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {

  @ViewChild('table')
  public table!: DynamicTableComponent;

  public tableConfig: TableConfig;

  private editIndex!: string | undefined;

  constructor(private _productTableService: ProductTableService, private route: ActivatedRoute, public router: Router, private cdRef: ChangeDetectorRef) {
    this.editIndex = getItem('edit');
    this.tableConfig = {
      ...this._productTableService.tableConfig,
      rows: getItem('rows') ? getItem('rows') : this._productTableService.tableConfig.rows
    };
  }

  public ngAfterViewInit(): void {
    if (getItem('product')) {
      console.log(JSON.parse(getItem('product')));
      console.log(this.editIndex);
      this.addData(JSON.parse(getItem('product')), this.editIndex !== null);
      removeItem('product')
    }
    removeItem('edit')
    this.cdRef.detectChanges();
  }

  editRow(row: any) {
    addItem('edit', row.index)
    addItem('product', row)
    this.router.navigate(['/product', 'edit',]);
  }

  public addData(row: object, edit: boolean) {
    console.log(edit);

    if (edit) {
      this.table.editRow(row, Number(this.editIndex))
    } else {
      this.table.addRows([
        row
      ])
    }
  }

  public dataChange(rows: object[]) {
    addItem('rows', rows)
  }
}
