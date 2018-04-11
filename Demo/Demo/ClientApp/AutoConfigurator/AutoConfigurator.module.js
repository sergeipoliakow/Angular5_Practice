var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoConfiguratorComponent } from './AutoConfigurator.component';
import { ModelSelectorComponent } from './ModelSelector/ModelSelector.component';
import { EngineSelectorComponent } from './EngineSelector/EngineSelector.component';
import { SuspensionSelectorComponent } from './SuspensionSelector/SuspensionSelector.component';
import { TransmissionSelectorComponent } from './TransmissionSelector/TransmissionSelector.component';
var AutoConfiguratorModule = /** @class */ (function () {
    function AutoConfiguratorModule() {
    }
    AutoConfiguratorModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpClientModule],
            declarations: [AutoConfiguratorComponent, ModelSelectorComponent, EngineSelectorComponent, SuspensionSelectorComponent, TransmissionSelectorComponent],
            bootstrap: [AutoConfiguratorComponent]
        })
    ], AutoConfiguratorModule);
    return AutoConfiguratorModule;
}());
export { AutoConfiguratorModule };
//# sourceMappingURL=AutoConfigurator.module.js.map