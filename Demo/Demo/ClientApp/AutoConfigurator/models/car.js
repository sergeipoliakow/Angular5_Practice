export var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Gray"] = 4] = "Gray";
})(Color || (Color = {}));
var Car = /** @class */ (function () {
    function Car(id, modelId, engineId, transmissionId, suspensionId, color, cost) {
        this.id = id;
        this.modelId = modelId;
        this.engineId = engineId;
        this.transmissionId = transmissionId;
        this.suspensionId = suspensionId;
        this.color = color;
        this.cost = cost;
    }
    return Car;
}());
export { Car };
//# sourceMappingURL=car.js.map