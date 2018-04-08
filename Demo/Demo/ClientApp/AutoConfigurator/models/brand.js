var Country;
(function (Country) {
    Country[Country["Russia"] = 0] = "Russia";
    Country[Country["Japan"] = 1] = "Japan";
    Country[Country["USA"] = 2] = "USA";
    Country[Country["Germany"] = 3] = "Germany";
    Country[Country["UK"] = 4] = "UK";
    Country[Country["China"] = 5] = "China";
})(Country || (Country = {}));
var Brand = /** @class */ (function () {
    function Brand(id, name, country) {
        this.id = id;
        this.name = name;
        this.country = country;
    }
    return Brand;
}());
export { Brand };
//# sourceMappingURL=brand.js.map