export class ConversaoResponse{
   
   
    public base!: string; 
    public date!: string;
    public rates!: any;

    constructor(base: string, date: string, rates: any) {
        this.base = base;
        this.date = date;
        this.rates = rates;
    }
}