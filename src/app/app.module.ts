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
  TagsEditorModule,
  DateEditorModule,
  TimeEditorModule,
  TypeAheadEditorModule
 } from "angular-inline-editors";

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
    TagsEditorModule.forRoot(),
    DateEditorModule.forRoot(),
    TimeEditorModule.forRoot(),
    TypeAheadEditorModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }