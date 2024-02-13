import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  private nombre: string = "David";
  private edad: number = 25;
  private correo: string = "david@gmail.com"

  getNombre(){
    return this.nombre
  }

  getEdad(){
    return this.edad
  }

  getCorreo(){
    return this.correo
  }

  saludar(value: string){

    alert("Hola: " + this.getNombre())
  }

  inputBox = false;


num1 = 10;
num2 = 20;
resultSuma = 0;

suma(a: number, b: number ){
  this.resultSuma = this.num1 + this.num2;
  return this.resultSuma;
}



}
