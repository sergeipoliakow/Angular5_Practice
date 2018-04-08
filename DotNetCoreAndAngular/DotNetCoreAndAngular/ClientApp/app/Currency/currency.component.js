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
import { Currency } from './currency';
var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(dataService) {
        this.dataService = dataService;
        this.currency = new Currency();
        this.currencies = new Array();
        this.selectedCurrency = new Currency();
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        this.loadCurrencies(); // загрузка данных при старте компонента
    };
    CurrencyComponent.prototype.loadCurrencies = function () {
        var _this = this;
        this.dataService.getCurrencies().subscribe(function (data) { return _this.currencies = data; });
        this.dataService.getCurrencies().subscribe(function (data) { return _this.selectedCurrency = data[0]; });
    };
    CurrencyComponent.prototype.save = function () {
        var _this = this;
        this.dataService.updateCurrency(this.currency).subscribe(function (data) { return _this.loadCurrencies(); });
        this.cancel();
    };
    CurrencyComponent.prototype.editCurrency = function (c) {
        this.currency = c;
    };
    CurrencyComponent.prototype.selectCurrency = function (c) {
        this.selectedCurrency = c;
        this.cancel();
    };
    CurrencyComponent.prototype.cancel = function () {
        this.currency = new Currency();
    };
    CurrencyComponent = __decorate([
        Component({
            selector: 'currency',
            templateUrl: './currency.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], CurrencyComponent);
    return CurrencyComponent;
}());
export { CurrencyComponent };
//# sourceMappingURL=currency.component.js.map