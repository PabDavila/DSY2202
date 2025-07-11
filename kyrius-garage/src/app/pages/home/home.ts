import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  productos = [
    {
      nombre: 'Machinedramon - Bandai',
      descripcion: 'Modelo a escala de Machinedramon, detallado y articulado.',
      imagen: 'assets/img/modelo3.jpg'
    },
    {
    nombre: "Mecha Godzilla Kiryu - Aoshima",
    descripcion: "Clasico de la pelicula Godzilla Against Mechagodzilla, escala 1/100, perfecto para vitrinas.",
    imagen: "assets/img/modelo1.jpg"
    },
    {
    nombre: "Metal Gear Rex - Kotobukiya",
    descripcion: "El clasico jefe de la serie Metal Gear Solid, escala 1/100, perfecto para vitrinas.",
    imagen: "assets/img/modelo2.jpg"
    }
  ];
}
