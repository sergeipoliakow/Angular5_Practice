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
var SuspensionSelectorComponent = /** @class */ (function () {
    function SuspensionSelectorComponent(dataService) {
        this.dataService = dataService;
        this.suspensionSelectedEvent = new EventEmitter();
        this.selectedSuspensionId = null;
    }
    SuspensionSelectorComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    SuspensionSelectorComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (data) { return _this.suspensions = data; });
    };
    SuspensionSelectorComponent.prototype.suspensionSelected = function () {
        var _this = this;
        this.suspensionSelectedEvent.emit(this.suspensions.find(function (x) { return x.id == _this.selectedSuspensionId; }));
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SuspensionSelectorComponent.prototype, "suspensionSelectedEvent", void 0);
    SuspensionSelectorComponent = __decorate([
        Component({
            selector: 'SuspensionSelector',
            templateUrl: './SuspensionSelector.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], SuspensionSelectorComponent);
    return SuspensionSelectorComponent;
}());
export { SuspensionSelectorComponent };
//# sourceMappingURL=SuspensionSelector.component.js.map