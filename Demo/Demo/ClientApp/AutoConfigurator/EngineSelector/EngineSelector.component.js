var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service';
import { EngineType } from '../models/engine';
import { Model } from '../models/model';
var EngineSelectorComponent = /** @class */ (function () {
    function EngineSelectorComponent(dataService) {
        this.dataService = dataService;
        this.engineSelectedEvent = new EventEmitter();
        this.selectedEngineId = null;
    }
    EngineSelectorComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedModel']) {
            this.loadData();
        }
    };
    EngineSelectorComponent.prototype.ngOnInit = function () {
        this.loadData();
        var types = Object.keys(EngineType);
        this.types = types.slice(types.length / 2);
    };
    EngineSelectorComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getData(this.selectedModel).subscribe(function (data) { return _this.engines = data; });
    };
    EngineSelectorComponent.prototype.engineSelected = function () {
        var _this = this;
        this.engineSelectedEvent.emit(this.engines.find(function (x) { return x.id == _this.selectedEngineId; }));
    };
    __decorate([
        Input(),
        __metadata("design:type", Model)
    ], EngineSelectorComponent.prototype, "selectedModel", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EngineSelectorComponent.prototype, "engineSelectedEvent", void 0);
    EngineSelectorComponent = __decorate([
        Component({
            selector: 'EngineSelector',
            templateUrl: './EngineSelector.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], EngineSelectorComponent);
    return EngineSelectorComponent;
}());
export { EngineSelectorComponent };
//# sourceMappingURL=EngineSelector.component.js.map