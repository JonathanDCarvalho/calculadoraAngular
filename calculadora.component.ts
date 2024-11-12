import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  display: string = '';  // Tela da calculadora

  addToDisplay(value: string) {
    this.display += value;
  }

  calculate() {
    try {
      // Usa a função evaluate do mathjs para avaliar a expressão de forma segura
      this.display = evaluate(this.display).toString();
    } catch (e) {
      this.display = 'Erro';
    }
  }

  clear() {
    this.display = '';
  }
}
