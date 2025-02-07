var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, ano, portas) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.portas = portas;
        return _this;
    }
    Carro.prototype.getPortas = function () {
        return this.portas;
    };
    return Carro;
}(Veiculo));
var Meucarro = new Carro('Toyota', 'Corolla', 2020, 4);
console.log(Meucarro.marca);
console.log(Meucarro.ano);
console.log(Meucarro.modelo);
console.log(Meucarro.getPortas());
// A "getPortas" é para permitir ver a quantidade de portas, codigo ficar mais organizado;
