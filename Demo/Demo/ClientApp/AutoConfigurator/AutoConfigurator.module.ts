import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoConfiguratorComponent } from './AutoConfigurator.component';
import { ModelSelectorComponent } from './ModelSelector/ModelSelector.component';
import { EngineSelectorComponent } from './EngineSelector/EngineSelector.component';
import { SuspensionSelectorComponent } from './SuspensionSelector/SuspensionSelector.component';
import { TransmissionSelectorComponent } from './TransmissionSelector/TransmissionSelector.component';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AutoConfiguratorComponent, ModelSelectorComponent, EngineSelectorComponent, SuspensionSelectorComponent, TransmissionSelectorComponent],
    bootstrap: [AutoConfiguratorComponent]
})
export class AutoConfiguratorModule { }