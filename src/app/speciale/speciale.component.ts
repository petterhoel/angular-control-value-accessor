import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-speciale',
  templateUrl: './speciale.component.html',
  styleUrls: ['./speciale.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SpecialeComponent),
    multi: true,
  }]
})
export class SpecialeComponent implements ControlValueAccessor {
  value = '';
  onChange: () => void;
  onTouched: () => void;
  disabled = false;

  writeValue(value: string): void {
    this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
