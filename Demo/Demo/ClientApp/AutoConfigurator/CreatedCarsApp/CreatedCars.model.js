export var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Gray"] = 4] = "Gray";
})(Color || (Color = {}));
var Car = /** @class */ (function () {
    function Car(id, modelId, model, engineId, engine, transmissionId, transmission, suspensionId, suspension, color, cost) {
        this.id = id;
        this.modelId = modelId;
        this.model = model;
        this.engineId = engineId;
        this.engine = engine;
        this.transmissionId = transmissionId;
        this.transmission = transmission;
        this.suspensionId = suspensionId;
        this.suspension = suspension;
        this.color = color;
        this.cost = cost;
    }
    return Car;
}());
export { Car };
//# sourceMappingURL=CreatedCars.model.js.map