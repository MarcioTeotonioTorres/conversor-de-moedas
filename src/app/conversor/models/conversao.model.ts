export class Conversao{
   
    public converter:  string;
    public convertido: string; 
    public valor: number;
   
    constructor(converter: string, convertido: string, valor: number |null) {
        this.converter = converter;
        this.convertido = convertido;
        this.valor = valor !== null ? valor : 0;
    }
      

      
}
