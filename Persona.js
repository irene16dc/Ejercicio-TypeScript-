"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
var Persona = /** @class */ (function () {
    function Persona(nomb, apel, edad, dni, cump, colorFav, s, dire, mail, telef, not) {
        this.nombre = nomb;
        this.apellidos = apel;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cump;
        this.colorFavorito = colorFav;
        this.sexo = s;
        this.direcciones = [];
        this.mails = [];
        this.telefono = [];
        this.nota = not;
    }
    //get
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    Persona.prototype.getCumpleano = function () {
        return this.cumpleanos;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getDireccion = function () {
        return this.direcciones;
    };
    Persona.prototype.getMail = function () {
        return this.mails;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.getNota = function () {
        return this.nota;
    };
    // set
    Persona.prototype.setNombre = function (valueNombre) {
        return this.nombre = valueNombre;
    };
    Persona.prototype.setApellido = function (valueApe) {
        return this.apellidos = valueApe;
    };
    Persona.prototype.setEdad = function (valuEdad) {
        return this.edad = valuEdad;
    };
    Persona.prototype.setDNI = function (valueDNI) {
        return this.dni = valueDNI;
    };
    Persona.prototype.setCumpleano = function (valueCumple) {
        return this.cumpleanos = valueCumple;
    };
    Persona.prototype.setColorFavorito = function (valueColor) {
        return this.colorFavorito = valueColor;
    };
    Persona.prototype.setSexo = function (valueSexo) {
        return this.sexo = valueSexo;
    };
    Persona.prototype.setDireccion = function (valueDireccion) {
        return this.direcciones = valueDireccion;
    };
    Persona.prototype.setMail = function (valueMail) {
        return this.mails = valueMail;
    };
    Persona.prototype.setTelefono = function (valueTelf) {
        return this.telefono = valueTelf;
    };
    Persona.prototype.setNota = function (valueNota) {
        return this.nota = valueNota;
    };
    Persona.prototype.mostrarDatos = function () {
        console.log(this.getNombre(), this.getApellido() + " Edad:" + this.getEdad() + " Dni:" + this.getDNI() + " Cumpleaños:" + this.getCumpleano() + " Color Favorito:" + this.getColorFavorito() + " Sexo: " + this.getSexo(), this.getDireccion(), this.getMail(), this.getTelefono(), this.getNota());
    };
    /** Rellenar array Direccion , Telefdono y Mail */
    Persona.prototype.rellenarDireccion = function (c, n, pi, l, cp, pr, p) {
        var r = new Direccion_1.Direccion(c, n, pi, l, cp, pr, p);
        this.direcciones.push(r);
    };
    Persona.prototype.rellenarMail = function (a, b) {
        var r = new Mail_1.Mail(a, b);
        this.mails.push(r);
    };
    Persona.prototype.rellenarTelefono = function (a, b) {
        var r = new Telefono_1.Telefono(a, b);
        this.telefono.push(r);
    };
    /* */
    Persona.prototype.cambiar = function (d, t, m) {
        // cambiar Direccion 
        d[0].setCalle("Calle Tribaldos");
        d[0].setNumero(20);
        d[0].setPiso(4);
        d[0].setLetra("G");
        d[0].setCodigoPostal(28043);
        d[0].setPoblacion("Madrid");
        d[0].setProvincia("Madrid");
        // cambiar mail 
        m[0].setTipo("hotmail");
        m[0].setDireccion("persona@hotmail.com");
        // Cambiar telefono
        t[0].setTipo("movil");
        t[0].setnumeron(622213578);
    };
    return Persona;
}());
exports.Persona = Persona;
