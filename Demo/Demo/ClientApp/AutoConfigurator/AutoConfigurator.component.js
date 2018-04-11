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
import { Color, Car } from './models/car';
import { Engine } from './models/engine';
import { Suspension } from './models/suspension';
import { Transmission } from './models/transmission';
var AutoConfiguratorComponent = /** @class */ (function () {
    function AutoConfiguratorComponent(dataService) {
        this.dataService = dataService;
        this.selectedColor = null;
        this.selectedModel = new Model();
        this.selectedBrand = new Brand();
        this.selectedEngine = new Engine();
        this.selectedSuspension = new Suspension();
        this.selectedTransmission = new Transmission();
        this.imgSrc = "";
        this.cost = 0;
    }
    AutoConfiguratorComponent.prototype.ngOnInit = function () {
        this.setImgSrc();
        var colors = Object.keys(Color);
        this.colors = colors.slice(colors.length / 2);
    };
    AutoConfiguratorComponent.prototype.save = function () {
        var car = new Car(0, this.selectedModel.id, this.selectedEngine.id, this.selectedTransmission.id, this.selectedSuspension.id, Color[this.selectedColor], this.cost);
        console.log(car);
        this.dataService.saveCar(car).subscribe(function (data) { return car = data; });
    };
    AutoConfiguratorComponent.prototype.selectedModelMessage = function ($event) {
        this.selectedModel = $event;
        this.setImgSrc();
        this.CalculateCost();
    };
    AutoConfiguratorComponent.prototype.selectedBrandMessage = function ($event) {
        this.selectedBrand = $event;
        this.selectedModel = new Model();
        this.setImgSrc();
    };
    AutoConfiguratorComponent.prototype.selectedEngineMessage = function ($event) {
        this.selectedEngine = $event;
        this.CalculateCost();
    };
    AutoConfiguratorComponent.prototype.selectedSuspensionMessage = function ($event) {
        this.selectedSuspension = $event;
        this.CalculateCost();
    };
    AutoConfiguratorComponent.prototype.selectedTransmissionMessage = function ($event) {
        this.selectedTransmission = $event;
        this.CalculateCost();
    };
    AutoConfiguratorComponent.prototype.colorSelected = function () {
        this.setImgSrc();
    };
    AutoConfiguratorComponent.prototype.setImgSrc = function () {
        if (this.selectedModel.name != undefined && this.selectedColor != null) {
            this.imgSrc = 'imgs\\cars\\' + this.selectedBrand.name + '\\' + this.selectedModel.name + '\\' + this.selectedColor + '.png';
        }
    };
    AutoConfiguratorComponent.prototype.CalculateCost = function () {
        this.cost = this.selectedModel.baseCost + this.selectedEngine.cost + this.selectedSuspension.cost + this.selectedTransmission.cost;
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