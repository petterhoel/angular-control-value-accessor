import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpecialeComponent } from './speciale/speciale.component';
import { FormControlDebuggerComponent } from './form-control-debugger/form-control-debugger.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialeComponent,
    FormControlDebuggerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
