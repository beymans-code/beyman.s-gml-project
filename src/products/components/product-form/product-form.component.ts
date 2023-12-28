import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../../dynamic-components/components/dynamic-form/dynamic-form.component';
import { BaseControl } from '../../../dynamic-components/models/dynamic-form.model';
import { ProductFormService } from '../../services/product-form.service';
import { DynamicButtonComponent } from '../../../dynamic-components/components/dynamic-button/dynamic-button.component';
import { DynamicCardComponent } from '../../../dynamic-components/components/dynamic-card/dynamic-card.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { addItem, getItem } from '../../services/storage';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [DynamicFormComponent, DynamicButtonComponent, DynamicCardComponent],
  providers: [ProductFormService],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements AfterViewInit {

  @ViewChild('formCreate')
  public formCreate!: DynamicFormComponent;

  public controls: BaseControl[];

  private edit!: string;

  constructor(private _productFormService: ProductFormService, private route: ActivatedRoute, public router: Router, private cdRef: ChangeDetectorRef) {
    this.controls = this._productFormService.controls;
    this.edit = getItem('edit');
  }

  public ngAfterViewInit(): void {
    this.route.params.pipe().subscribe(params => {
      this.formCreate.mode = params['edit'] ? 'edit' : undefined;
    });
    if (getItem('product'))
      this.formCreate.formGroup.patchValue(getItem('product'))
    this.cdRef.detectChanges();
  }

  public addData(edit: boolean) {
    const value = JSON.stringify(this.formCreate.formGroup.value)
    addItem('product', value)
    if (edit) {
      this.router.navigate(['/product-list', 'edit']);
    } else {
      this.router.navigate(['/product-list',]);
    }
    this.formCreate.reset();
  }

  editRow(row: object) {
    this.formCreate.formGroup.patchValue(row)
    this.formCreate.mode = 'edit';
  }
}
