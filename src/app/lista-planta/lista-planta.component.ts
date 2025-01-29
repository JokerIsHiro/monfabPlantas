import { Component, Input } from '@angular/core';
import { Planta } from '../planta';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-planta',
  imports: [],
  templateUrl: './lista-planta.component.html',
  styleUrl: './lista-planta.component.scss'
})
export class ListaPlantaComponent {
  @Input() plantas: Planta[] = [];

  onPlantaAdded (planta: Planta) {
    this.plantas.push(planta);
  }

  borrarPlanta(id: number): void {
    this.plantas = this.plantas.filter((planta) => planta.id !== id);
  }

  addFav(id: number): void {
    const planta = this.plantas.find(p => p.id === id);
    if (planta) {
      planta.favorito = !planta.favorito;
    }
  }
}
