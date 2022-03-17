"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.Piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.Poblacion = poblacion;
        this.provincia = provincia;
    }
    //get
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.getPiso = function () {
        return this.Piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.getCodigoPostal = function () {
        return this.codigoPostal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.Poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    //set
    Direccion.prototype.setCalle = function (value) {
        return this.calle = value;
    };
    Direccion.prototype.setNumero = function (value) {
        return this.numero = value;
    };
    Direccion.prototype.setPiso = function (value) {
        return this.Piso = value;
    };
    Direccion.prototype.setLetra = function (value) {
        return this.letra = value;
    };
    Direccion.prototype.setCodigoPostal = function (value) {
        return this.codigoPostal = value;
    };
    Direccion.prototype.setPoblacion = function (value) {
        return this.Poblacion = value;
    };
    Direccion.prototype.setProvincia = function (value) {
        return this.provincia = value;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
