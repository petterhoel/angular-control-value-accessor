import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cva';

  constructor(private formbuilder: FormBuilder) { }

  form = this.formbuilder.group(
    {
      lotta: ['lotter', Validators.required],
      donna: ['donner', Validators.required]
    }
  );


  disableAll(): void {
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control.disable();
    });
  }

  enableAll(): void {
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control.enable();
    });
  }
}
