import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoConfiguratorComponent } from './AutoConfigurator.component';
import { ModelSelectorComponent } from './ModelSelector/ModelSelector.component';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AutoConfiguratorComponent, ModelSelectorComponent],
    bootstrap: [AutoConfiguratorComponent]
})
export class AutoConfiguratorModule { }