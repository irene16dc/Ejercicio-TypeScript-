export class Direccion{
    private calle:string;
    private numero:number;
    private Piso:number;
    private letra:string;
    private codigoPostal:number;
    private Poblacion:string;
    private provincia:string;

    constructor(calle:string,numero:number, piso:number,letra:string, codigoPostal:number,poblacion:string, provincia:string){
        this.calle=calle;
        this.numero=numero;
        this.Piso=piso;
        this.letra=letra;
        this.codigoPostal=codigoPostal;
        this.Poblacion=poblacion;
        this.provincia=provincia;
    }

    //get
    public  getCalle(): string {
        return this.calle;
    }
    public  getNumero(): number {
        return this.numero;
    }
    public  getPiso(): number {
        return this.Piso;
    }
    public  getLetra(): string {
        return this.letra;
    }
    public  getCodigoPostal(): number {
        return this.codigoPostal;
    }
    public  getPoblacion(): string {
        return this.Poblacion;
    }
    public getProvincia():string{
        return this.provincia;
    }

    //set
    public setCalle(value: string) {
        return this.calle=value;
    }
    public  setNumero(value: number) {
        return this.numero=value;
    }
    public  setPiso(value: number) {
        return this.Piso=value;
    }
    public  setLetra(value: string) {
        return this.letra=value;
    }
    public  setCodigoPostal(value: number) {
        return this.codigoPostal=value;
    }
    public  setPoblacion(value: string) {
        return this.Poblacion=value;
    }
    public setProvincia(value:string){
        return this.provincia=value;
    }


}