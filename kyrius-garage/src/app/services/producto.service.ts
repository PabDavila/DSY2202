import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos$ = new BehaviorSubject<Producto[]>([]);

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get<Producto[]>('assets/data/productos.json').subscribe(data => {
      this.productos$.next(data);
    });
  }

  obtenerProductos(): Observable<Producto[]> {
    return this.productos$.asObservable();
  }

  agregarProducto(producto: Producto) {
    const actual = this.productos$.value;
    producto.id = Math.max(...actual.map(p => p.id)) + 1;
    this.productos$.next([...actual, producto]);
  }

  editarProducto(producto: Producto) {
    const actual = this.productos$.value.map(p => p.id === producto.id ? producto : p);
    this.productos$.next(actual);
  }

  eliminarProducto(id: number) {
    const actual = this.productos$.value.filter(p => p.id !== id);
    this.productos$.next(actual);
  }
}
