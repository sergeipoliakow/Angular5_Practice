var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Model } from './models/model';
import { Brand } from './models/brand';
import { Color } from './models/car';
var AutoConfiguratorComponent = /** @class */ (function () {
    function AutoConfiguratorComponent(dataService) {
        this.dataService = dataService;
        this.selectedColor = "Black";
        this.selectedModel = new Model();
        this.selectedBrand = new Brand();
        this.imgSrc = "";
    }
    AutoConfiguratorComponent.prototype.ngOnInit = function () {
        this.load(); // загрузка данных при старте компонента  
        var colors = Object.keys(Color);
        this.colors = colors.slice(colors.length / 2);
    };
    AutoConfiguratorComponent.prototype.load = function () {
        var _this = this;
        this.dataService.getSome().subscribe(function (data) { return _this.models = data; });
    };
    AutoConfiguratorComponent.prototype.selectedModelMessage = function ($event) {
        this.selectedModel = $event;
        this.setImgSrc();
    };
    AutoConfiguratorComponent.prototype.selectedBrandMessage = function ($event) {
        this.selectedBrand = $event;
    };
    AutoConfiguratorComponent.prototype.setImgSrc = function () {
        this.imgSrc = 'imgs\\' + this.selectedBrand.name + '\\' + this.selectedModel.name + '\\' + this.selectedColor + '.png';
    };
    AutoConfiguratorComponent = __decorate([
        Component({
            selector: 'AutoConfigurator',
            templateUrl: './AutoConfigurator.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AutoConfiguratorComponent);
    return AutoConfiguratorComponent;
}());
export { AutoConfiguratorComponent };
//# sourceMappingURL=AutoConfigurator.component.js.map