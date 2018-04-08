import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModelSelectorComponent } from './ModelSelector.component';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [ModelSelectorComponent],
    bootstrap: [ModelSelectorComponent]
})
export class ModelSelectorModule { }