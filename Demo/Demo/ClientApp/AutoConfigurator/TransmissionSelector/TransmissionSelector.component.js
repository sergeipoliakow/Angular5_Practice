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
var TransmissionSelectorComponent = /** @class */ (function () {
    function TransmissionSelectorComponent(dataService) {
        this.dataService = dataService;
        this.transmissionSelectedEvent = new EventEmitter();
        this.selectedTransmissionId = null;
    }
    TransmissionSelectorComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    TransmissionSelectorComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (data) { return _this.transmissions = data; });
    };
    TransmissionSelectorComponent.prototype.transmissionSelected = function () {
        var _this = this;
        this.transmissionSelectedEvent.emit(this.transmissions.find(function (x) { return x.id == _this.selectedTransmissionId; }));
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TransmissionSelectorComponent.prototype, "transmissionSelectedEvent", void 0);
    TransmissionSelectorComponent = __decorate([
        Component({
            selector: 'TransmissionSelector',
            templateUrl: './TransmissionSelector.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], TransmissionSelectorComponent);
    return TransmissionSelectorComponent;
}());
export { TransmissionSelectorComponent };
//# sourceMappingURL=TransmissionSelector.component.js.map