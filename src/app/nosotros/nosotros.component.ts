import { Persona } from './../persona.model';
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


num1 = 0;
num2 = 0;
resultSuma = 0;

suma(a: number, b: number ){
  this.resultSuma = this.num1 + this.num2;
  return this.resultSuma;
}



registro = false;
mensaje = "";
name:string = "";
lastName:string = "";

registrar(){
  this.registro=true;
  this.mensaje = "El usuario se ha registrado con el nombre de"
}

Personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Lucas", "Martin")];

agregarPersona(){
  let persona1 = new Persona(this.name, this.lastName);
  this.Personas.push(persona1);
}

}
