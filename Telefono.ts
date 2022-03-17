export class Telefono  {
    private Tipo:string;
    private numero:number;

    constructor(tipo:string,numero:number){
        this.Tipo=tipo;
        this.numero=numero;
    }

    //get
    public  getTipo(): string {
        return this.Tipo;
    }
    public  getdnumero(): number {
        return this.numero;
    } 
    //set
    public  setTipo(value: string) {
        this.Tipo = value;
    }
    public  setnumeron(value: number) {
        this.numero = value;
    } 

}