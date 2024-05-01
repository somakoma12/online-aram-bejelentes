import { Ora } from "./Ora";


export class Jelentes{
    constructor(ora : Ora){
        this.ido = new Date()
        this.ora = ora
    }
    ido: Date;
    ora: Ora;
}