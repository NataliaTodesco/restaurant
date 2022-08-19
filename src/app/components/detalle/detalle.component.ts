import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { PlatosService } from 'src/app/services/platos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  id: any;
  plato: any;
  existe: boolean = false;

  constructor(
    private aRoute: ActivatedRoute,
    private platoSevice: PlatosService,
    private menuService: MenuService
  ) {
    this.id = this.aRoute.snapshot.params['id'];
  }
  
  ngOnInit(): void {
    this.platoSevice.BuscarPlatoPorID(this.id).subscribe(
      (data) => {
        this.plato = data;
        this.existe = this.menuService.menu.includes(data);
      },
      (error) => console.log(error)
    );
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

      Swal.fire('Plato Agregado!', '', 'success');
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

      Swal.fire('Plato Agregado!', '', 'success');
      this.existe = true;
    } else {
      Swal.fire(
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

    Swal.fire('Plato Eliminado', '', 'success');
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

  IsNull(element: string){
    if (element === null)
      return ' - ';
    else return element;
  }

  IsTrue(v: boolean){
    if (v === true) return '<i class="bi bi-check-circle-fill text-success"></i>'
    else return '<i class="bi bi-x-circle-fill text-danger"></i>'
  }

  Informacion(precio: number, tiempo: number, score: number){
    this.menuService.setAcuPrecio(this.menuService.acuPrecio+precio);

    let promT = (this.menuService.promTiempoPreparacion+tiempo) / 2;
    this.menuService.setPromTiempoPreparacion(promT)

    let promHS = (this.menuService.promHealtScore+score) / 2;
    this.menuService.setPromHealtScore(promHS)
  }
}
