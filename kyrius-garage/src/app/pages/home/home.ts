import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }
}
