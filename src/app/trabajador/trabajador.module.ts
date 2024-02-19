export class TrabajadorModule {

  public isPobre = this.salario <= 1500 ? "POBRE" : "RICO"
  public isDavid = this.nombre === "david"
  constructor(public nombre: string, public id: number, public direccion: any, public salario: number){

  }

}
