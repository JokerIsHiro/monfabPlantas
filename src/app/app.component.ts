import { Component } from '@angular/core';
import { FormPlantaComponent } from "./form-planta/form-planta.component";
import { ListaPlantaComponent } from "./lista-planta/lista-planta.component";
import { Planta } from './planta';

@Component({
  selector: 'app-root',
  imports: [FormPlantaComponent, ListaPlantaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  plantas: Planta[] = [];

  title = 'Inventario de Plantas';

  onPlantaGuardada(planta: Planta): void {
    this.plantas.push(planta);
  }
}
