var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service';
var ModelSelectorComponent = /** @class */ (function () {
    function ModelSelectorComponent(dataService) {
        this.dataService = dataService;
        this.selectedBrandId = null;
        this.selectedModelId = null;
        this.modelsOfSelectedBrand = new Array();
        this.modelSelectedEvent = new EventEmitter();
        this.brandSelectedEvent = new EventEmitter();
    }
    ModelSelectorComponent.prototype.ngOnInit = function () {
        this.loadData(); // загрузка данных при старте компонента  
    };
    ModelSelectorComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (data) { return _this.models = data.models; });
        this.dataService.getData().subscribe(function (data) { return _this.brands = data.brands; });
    };
    ModelSelectorComponent.prototype.brandSelected = function () {
        var _this = this;
        this.modelsOfSelectedBrand = this.models.filter(function (x) { return x.brandId == _this.selectedBrandId; });
        this.brandSelectedEvent.emit(this.brands.find(function (x) { return x.id == _this.selectedBrandId; }));
    };
    ModelSelectorComponent.prototype.modelSelected = function () {
        var _this = this;
        this.modelSelectedEvent.emit(this.models.find(function (x) { return x.id == _this.selectedModelId; }));
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ModelSelectorComponent.prototype, "modelSelectedEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ModelSelectorComponent.prototype, "brandSelectedEvent", void 0);
    ModelSelectorComponent = __decorate([
        Component({
            selector: 'ModelSelector',
            templateUrl: './ModelSelector.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], ModelSelectorComponent);
    return ModelSelectorComponent;
}());
export { ModelSelectorComponent };
//# sourceMappingURL=ModelSelector.component.js.map