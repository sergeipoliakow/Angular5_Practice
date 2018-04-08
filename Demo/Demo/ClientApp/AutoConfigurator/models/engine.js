var EngineType;
(function (EngineType) {
    EngineType[EngineType["Petrol"] = 0] = "Petrol";
    EngineType[EngineType["Diesel"] = 1] = "Diesel";
    EngineType[EngineType["Electric"] = 2] = "Electric";
    EngineType[EngineType["Hybrid"] = 3] = "Hybrid";
})(EngineType || (EngineType = {}));
var Engine = /** @class */ (function () {
    function Engine(id, name, power, type, cost, brandId) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.type = type;
        this.cost = cost;
        this.brandId = brandId;
    }
    return Engine;
}());
export { Engine };
//# sourceMappingURL=engine.js.map