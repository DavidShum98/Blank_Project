import { TrabajadorModule } from '../trabajador/trabajador.module';
import { Persona } from './../persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent {
  private nombre: string = 'David';
  private edad: number = 25;
  private correo: string = 'david@gmail.com';

  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad;
  }

  getCorreo() {
    return this.correo;
  }

  saludar(value: string) {
    alert('Hola: ' + this.getNombre());
  }

  inputBox = false;

  num1: number = 0;
  num2: number = 0;
  resultSuma = 0;

  suma(a: number, b: number) {
    this.resultSuma = this.num1 + this.num2;
    return this.resultSuma;
  }

  registro = false;
  mensaje = '';
  name: string = '';
  lastName: string = '';

  registrar() {
    this.registro = true;
    this.mensaje = 'El usuario se ha registrado con el nombre de';
  }

  Personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Lucas', 'Martin'),
  ];

  agregarPersona() {
    let persona1 = new Persona(this.name, this.lastName);
    this.Personas.push(persona1);
  }

  Trabajadores: TrabajadorModule[] = [
    new TrabajadorModule('Guata', 910519, 'Ave Velazquez 12', 5000),
    new TrabajadorModule('Pato', 901129, 'Ave Velazquez 12', 3000),
    new TrabajadorModule('osoCariñoso', 2022, 'Ave Velazquez 12', 200),
    new TrabajadorModule('elQuimico', 980531, 'Ave Velazquez 12', 1000),
  ];

  pobre: string ="";
  // pobre: boolean = false;

  isPobre() {
    for (let trabajador of this.Trabajadores) {
      if (trabajador.salario < 1500) {
        // trabajador.nombre + "es un pobre"
        this.pobre = "este trabajador es pobre";
      }
    }
  }

  nameWorker: string = "";
  idWorker: number = 0;
  addresWorker: any;
  salaryWorker: number = 0;

  addWorker(){
    let worker = new TrabajadorModule(this.nameWorker, this.idWorker, this.addresWorker, this.salaryWorker);
    this.Trabajadores.push(worker);
  }
}
