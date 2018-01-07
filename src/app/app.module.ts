import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { 
  InputEditorModule, 
  CheckListEditorModule, 
  SelectEditorModule, 
  TextAreaEditorModule, 
  RadioListEditorModule, 
  CheckBoxEditorModule,
  TagsEditorModule } from "angular-inline-editors";

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InputEditorModule.forRoot(),
    SelectEditorModule.forRoot(),
    TextAreaEditorModule.forRoot(),
    CheckListEditorModule.forRoot(),
    RadioListEditorModule.forRoot(),
    CheckBoxEditorModule.forRoot(),
    TagsEditorModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }