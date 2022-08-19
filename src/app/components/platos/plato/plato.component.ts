import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { PlatosService } from 'src/app/services/platos.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css'],
})
export class PlatoComponent implements OnInit {
  @Input() plato: any;
  existe: boolean = false;

  constructor(
    private router: Router,
    private platoService: PlatosService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.platoService.BuscarPlatoPorID(this.plato.id).subscribe(
      (data) => {
        this.plato = data;
      },
      (error) => console.log(error)
    );
    this.existe = this.menuService.menu.includes(this.plato);
  }

  VerPlato() {
    this.router.navigate(['/plato/' + this.plato.id]);
  }

  AgregarPlato() {
    let array = this.menuService.menu;

    if (
      this.menuService.menu.length < 4 &&
      this.plato.vegan === false &&
      this.menuService.noVegano < 2
    ) {
      array.push(this.plato);
      this.menuService.setMenu(array);

      let noVegano: number = this.menuService.noVegano;
      this.menuService.setNoVegano(noVegano++);

      let precio = this.plato.pricePerServing;
      let tiempo = this.plato.readyInMinutes;
      let score = this.plato.healthScore;

      this.Informacion(precio, tiempo, score);

      this.Alerta('Plato Agregado!', '', 'success');
      this.existe = true;
    } else if (
      this.menuService.menu.length < 4 &&
      this.plato.vegan &&
      this.menuService.vegano < 2
    ) {
      array.push(this.plato);
      this.menuService.setMenu(array);

      let vegano: number = this.menuService.vegano;
      this.menuService.setVegano(vegano++);

      let precio = this.plato.pricePerServing;
      let tiempo = this.plato.readyInMinutes;
      let score = this.plato.healthScore;

      this.Informacion(precio, tiempo, score);

      this.Alerta('Plato Agregado!', '', 'success');
      this.existe = true;
    } else {
      this.Alerta(
        'No se pudo agregar el plato',
        'Solo pueden tener 4 platos en el menú (2 veganos y 2 que no lo sean)',
        'error'
      );
    }
  }


  EliminarPlato() {
    let array = this.menuService.menu;
    let index = array.findIndex((plato) => plato === this.plato);

    array.splice(index, 1);
    this.menuService.setMenu(array);

    this.Alerta('Plato Eliminado', '', 'success');
    this.existe = false;

    let precio = this.plato.pricePerServing;
    let tiempo = this.plato.readyInMinutes;
    let score = this.plato.healthScore;

    let acu = this.menuService.acuPrecio * 2 - precio;
    this.menuService.setAcuPrecio(acu);

    let promT = this.menuService.promTiempoPreparacion * 2 - tiempo;
    this.menuService.setPromTiempoPreparacion(promT);

    let promHS = (this.menuService.promHealtScore + score) / 2;
    this.menuService.setPromHealtScore(promHS);
  }

  Alerta(titulo: string, mensaje: string, tipo: SweetAlertIcon) {
    Swal.fire(titulo, mensaje, tipo);
  }

  Informacion(precio: number, tiempo: number, score: number) {
    this.menuService.setAcuPrecio(this.menuService.acuPrecio + precio);

    let promT = (this.menuService.promTiempoPreparacion + tiempo) / 2;
    this.menuService.setPromTiempoPreparacion(promT);

    let promHS = (this.menuService.promHealtScore + score) / 2;
    this.menuService.setPromHealtScore(promHS);
  }

}
