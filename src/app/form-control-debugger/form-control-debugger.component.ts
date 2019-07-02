import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-debugger',
  templateUrl: './form-control-debugger.component.html',
  styleUrls: ['./form-control-debugger.component.scss'],
})
export class FormControlDebuggerComponent {
  @Input() control: FormControl;
}
