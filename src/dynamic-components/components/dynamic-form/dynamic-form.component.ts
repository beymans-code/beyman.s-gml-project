import {
  AfterViewInit,
  // ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { BaseControl, EnableIf } from '../../models/dynamic-form.model';
import { clone } from 'lodash';
import { NgClass } from '@angular/common';
import { DynamicControlTextComponent } from '../dynamic-control-text/dynamic-control-text.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  inputs: [
    {
      name: 'baseControls',
      required: true,
    },
    {
      name: 'autoComplete',
    },
  ],
  outputs: [
    'formValue'
  ],
  imports: [ReactiveFormsModule, NgClass, DynamicControlTextComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  public set baseControls(value: BaseControl[] | undefined) {
    const newControlConfig = value || [];
    this._baseControls =
      newControlConfig.map((item) =>
        clone({
          ...item,
        })
      ) || [];
    if (!this.firstLoad) {
      this._createForm(this._baseControls || []);
    } else {
      this._updateForm(this._baseControls || []);
    }
    this.firstLoad = true;
  }

  @Input()
  public autoComplete: boolean;

  @Output()
  public formValue: EventEmitter<object> = new EventEmitter<object>();

  public firstLoad: boolean;

  public mode: 'create' | 'edit' | undefined;

  public formGroup = new FormGroup({});

  public _baseControls!: BaseControl[];

  public valid: boolean;

  private destroyFormSubscriptions$: Subject<void>;

  constructor() {
    this.destroyFormSubscriptions$ = new Subject();
    this.firstLoad = false;
    this.autoComplete = false;
    this.valid = false;
  }

  public ngOnInit(): void { }

  public ngAfterViewInit(): void {
    this.valid = this.formGroup.valid;
  }

  public ngOnDestroy(): void {
    this.destroyFormSubscriptions$.next();
    this.destroyFormSubscriptions$.complete();
  }

  public abstractControlToFormControl(
    _abstractControl: AbstractControl | null
  ): FormControl {
    return _abstractControl as FormControl;
  }

  private _createForm(controls: BaseControl[]) {
    if (controls)
      try {
        this.destroyFormSubscriptions$.next();
        this.formGroup = new FormGroup({});
        controls.map((control) => {
          if (control && control.key) {
            this._addControl(control);
          }
        });
        this._listenFormChanges();
      } catch (error) {
        console.error(error);
      }
  }

  private _updateForm(controls: BaseControl[]) {
    const oldKeys = Object.keys(this.formGroup.value);
    this.destroyFormSubscriptions$.next();
    this.destroyFormSubscriptions$.complete();

    oldKeys.forEach((key) => {
      if (!controls.find((control) => control.key?.trim() === key?.trim())) {
        this.formGroup.removeControl(key);
      }
    });

    controls.forEach((control) => {
      if (oldKeys.find((_oldKey) => _oldKey?.trim() === control.key?.trim())) {
        this._updateControl(control);
      }
    });

    controls.forEach((control) => {
      if (!oldKeys.find((_oldKey) => _oldKey?.trim() === control.key?.trim())) {
        this._addControl(control);
      }
    });

    this.formGroup.updateValueAndValidity();
    this._listenFormChanges();
  }

  private _addControl(control: BaseControl) {
    const formControl = this._controlValidators(control);
    if (control?._validator_disabled) {
      formControl?.disable();
    } else if (formControl?.disabled) {
      formControl?.enable();
    }
    this.formGroup.addControl(control.key.trim(), formControl);
    this.formGroup.updateValueAndValidity();
  }

  private _updateControl(control: BaseControl) {
    const validators = this._getValidators(control);
    this.formGroup.get(control.key?.trim() || '')?.setValidators(validators);
    this.formGroup.get(control.key?.trim() || '')?.updateValueAndValidity();

    if (control._validator_disabled) {
      this.formGroup.get(control.key?.trim() || '')?.disable();
    } else if (this.formGroup.get(control.key?.trim() || '')?.disabled) {
      this.formGroup.get(control.key?.trim() || '')?.enable();
    }
  }

  private _controlValidators(item: BaseControl) {
    const validators = this._getValidators(item);

    let _defaultValue: any = item?.defaultValue || null;
    if (item.type === 'CheckBox' || item.type === 'Switch') {
      _defaultValue = item?.defaultValue ? true : false;
    }

    const _control = new FormControl(
      {
        value: _defaultValue,
        disabled: item?._validator_disabled || false,
      },
      Validators.compose(validators)
    );

    return _control;
  }

  private _getValidators(item: BaseControl): any[] {
    let validators: any[] = [];
    if (!item?._validator_disabled) {
      if (item?._validator_required) {
        validators.push(Validators.required);
      }

      if (item?._input_type === 'email') validators.push(Validators.email);

      if (item._validator_minLength)
        validators.push(Validators.minLength(item._validator_minLength));

      if (item._validator_maxLength)
        validators.push(Validators.maxLength(item._validator_maxLength));
    }

    return validators;
  }

  private _listenFormChanges() {
    this.destroyFormSubscriptions$ = new Subject();
    this.formGroup.valueChanges
      .pipe(takeUntil(this.destroyFormSubscriptions$))
      .subscribe((value) => {
        this.formValue.emit(value);
        this.valid = this.formGroup.valid;
      });

    this._baseControls.forEach((control, index) => {
      if (control._enable_if?.key) {
        this.formGroup.get(control._enable_if.key)?.valueChanges
          .pipe(takeUntil(this.destroyFormSubscriptions$))
          .subscribe((value) => {
            if (control._enable_if)
              this.valideEnableIf(index, value, control.key)
          });
      }
    })
  }

  private valideEnableIf(index: number, value: any, key: string) {
    this.toggleControl(index, key, !value)
  }


  toggleControl(index: number, key: string, disabled: boolean) {
    disabled ? this.formGroup.get(key)?.disable() : this.formGroup.get(key)?.enable();
    this._baseControls[index] = {
      ...this._baseControls[index],
      _validator_disabled: disabled,
    }
  }

  public reset() {
    this.formGroup.reset();
    this.mode = undefined;
  }
}
