import { Component, EventEmitter, Output } from '@angular/core';
import { Planta } from '../planta';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-planta',
  imports: [FormsModule],
  templateUrl: './form-planta.component.html',
  styleUrl: './form-planta.component.scss',
})
export class FormPlantaComponent {
  nombre: string = '';
  tipo: 'Arbusto' | 'Arbol' = 'Arbusto';
  id: number = 1;

  @Output() plantaGuardada = new EventEmitter<Planta>();

  public guardarPlanta(): void {
    if (this.nombre.trim() && this.tipo) {
      const newPlanta: Planta = {
        id: this.id,
        nombre: this.nombre,
        tipo: this.tipo,
      };
      this.plantaGuardada.emit(newPlanta);
      this.id++;
      this.nombre = '';
      this.tipo = 'Arbusto';
    }
  }
}
