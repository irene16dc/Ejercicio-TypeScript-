"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.Tipo = tipo;
        this.numero = numero;
    }
    //get
    Telefono.prototype.getTipo = function () {
        return this.Tipo;
    };
    Telefono.prototype.getdnumero = function () {
        return this.numero;
    };
    //set
    Telefono.prototype.setTipo = function (value) {
        this.Tipo = value;
    };
    Telefono.prototype.setnumeron = function (value) {
        this.numero = value;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
