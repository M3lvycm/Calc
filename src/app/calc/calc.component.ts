import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  resultado: string = '';
  numeros: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  operadores: string[] = ['+', '-', '*', '/'];
  operacionFinalizada: boolean = false;

  agregarNumero(num: string) {
    if (this.operacionFinalizada) {
      this.resultado = '';
      this.operacionFinalizada = false;
    }
    this.resultado += num;
  }

  agregarOperador(op: string) {
    if (this.resultado.length > 0 && !this.operadores.includes(this.resultado.slice(-1))) {
      this.resultado += op;
      this.operacionFinalizada = false;
    }
  }

  calcular() {
    try {
      this.resultado = new Function(`return ${this.resultado}`)().toString();
      this.operacionFinalizada = true;
    } catch {
      this.resultado = 'Error';
      this.operacionFinalizada = true;
    }
  }

  limpiar() {
    this.resultado = '';
    this.operacionFinalizada = false;
  }
}
