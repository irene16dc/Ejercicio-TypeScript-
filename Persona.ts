import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {

    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanos: string;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: Direccion[];
    private mails: Mail[];
    private telefono: Telefono[];
    private nota: string;

    constructor(nomb: string, apel: string, edad: number, dni: string, cump: string, colorFav: string, s: string, dire: Direccion[], mail: Mail[], telef: Telefono[], not: string) {
        this.nombre = nomb;
        this.apellidos = apel;
        this.edad = edad
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
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellidos;
    }
    public getEdad(): number {
        return this.edad;
    }
    public getDNI(): string {
        return this.dni;
    }
    public getCumpleano(): string {
        return this.cumpleanos;
    }
    public getColorFavorito(): string {
        return this.colorFavorito;
    }
    public getSexo(): string {
        return this.sexo;
    }
    public getDireccion(): Direccion[] {
        return this.direcciones;
    }
    public getMail(): Mail[] {
        return this.mails;
    }
    public getTelefono(): Telefono[] {
        return this.telefono;
    }
    public getNota(): string {
        return this.nota;
    }

    // set
    public setNombre(valueNombre: string) {
        return this.nombre = valueNombre;
    }
    public setApellido(valueApe: string) {
        return this.apellidos = valueApe;
    }
    public setEdad(valuEdad: number) {
        return this.edad = valuEdad;
    }
    public setDNI(valueDNI: string) {
        return this.dni = valueDNI;
    }
    public setCumpleano(valueCumple: string) {
        return this.cumpleanos = valueCumple;
    }
    public setColorFavorito(valueColor: string) {
        return this.colorFavorito = valueColor;
    }
    public setSexo(valueSexo: string) {
        return this.sexo = valueSexo;
    }
    public setDireccion(valueDireccion: Direccion[]) {
        return this.direcciones = valueDireccion;
    }
    public setMail(valueMail: Mail[]) {
        return this.mails = valueMail;
    }
    public setTelefono(valueTelf: Telefono[]) {
        return this.telefono = valueTelf;
    }
    public setNota(valueNota: string) {
        return this.nota = valueNota;
    }

    mostrarDatos(): void {
        console.log(this.getNombre(), this.getApellido() + " Edad:" + this.getEdad() + " Dni:" + this.getDNI() + " Cumpleaños:" + this.getCumpleano() + " Color Favorito:" + this.getColorFavorito() + " Sexo: " + this.getSexo(), this.getDireccion(), this.getMail(), this.getTelefono(), this.getNota());
    }

    /** Rellenar array Direccion , Telefdono y Mail */
    rellenarDireccion(c: string, n: number, pi: number, l: string, cp: number, pr: string, p: string): any {

        var r: any = new Direccion(c, n, pi, l, cp, pr, p);
        this.direcciones.push(r);

    }
    rellenarMail(a: string, b: string): any {
        var r: any = new Mail(a, b);
        this.mails.push(r);

    }
    rellenarTelefono(a: string, b: number): any {

        var r: any = new Telefono(a, b);
        this.telefono.push(r);
    }

    /* */
    cambiar(d: any, t: any, m: any) {

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

    }


}
