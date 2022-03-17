"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.Tipo = tipo;
        this.direccion = direccion;
    }
    //get
    Mail.prototype.getTipo = function () {
        return this.Tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    //set
    Mail.prototype.setTipo = function (value) {
        this.Tipo = value;
    };
    Mail.prototype.setDireccion = function (value) {
        this.direccion = value;
    };
    return Mail;
}());
exports.Mail = Mail;
