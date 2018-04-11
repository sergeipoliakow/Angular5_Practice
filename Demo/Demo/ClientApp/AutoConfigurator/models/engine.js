export var EngineType;
(function (EngineType) {
    EngineType[EngineType["\u0411\u0435\u043D\u0437\u0438\u043D\u043E\u0432\u044B\u0439"] = 0] = "\u0411\u0435\u043D\u0437\u0438\u043D\u043E\u0432\u044B\u0439";
    EngineType[EngineType["\u0414\u0438\u0437\u0435\u043B\u044C\u043D\u044B\u0439"] = 1] = "\u0414\u0438\u0437\u0435\u043B\u044C\u043D\u044B\u0439";
    EngineType[EngineType["\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439"] = 2] = "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439";
    EngineType[EngineType["\u0413\u0438\u0431\u0440\u0438\u0434\u043D\u044B\u0439"] = 3] = "\u0413\u0438\u0431\u0440\u0438\u0434\u043D\u044B\u0439";
})(EngineType || (EngineType = {}));
var Engine = /** @class */ (function () {
    function Engine(id, name, power, type, cost, brandId) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.type = type;
        this.cost = cost;
        this.brandId = brandId;
        this.cost = 0;
    }
    return Engine;
}());
export { Engine };
//# sourceMappingURL=engine.js.map