import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css'],
})
export class PlatoComponent implements OnInit {
  @Input() plato: any;
  existe: boolean = false;

  constructor(private router: Router, private menuService: MenuService) {
    this.existe = this.menuService.menu.includes(this.plato);
  }

  ngOnInit(): void {}

  // Al hacer click en un plato del menú, se mostrarán los detalles de los campos acumulados y
  // promediados en el menú.

  VerPlato() {}

  //   El menú debe tener 4 platos. Debe haber 2 veganos y 2 que no lo sean. Esto debe
  // validarse al intentar agregar un nuevo plato.

  AgregarPlato() {
    let array = this.menuService.menu;

    if (
      this.menuService.menu.length < 4 &&
      this.plato &&
      this.menuService.noVegano < 2
    ) {
      array.push(this.plato);
      this.menuService.setMenu(array);
      Swal.fire(
        'Plato Agregado!',
        'El plato fue agregado al menú exitosamente',
        'success'
      );
    } else if (
      this.menuService.menu.length < 4 &&
      this.plato &&
      this.menuService.vegano < 2
    ) {
      array.push(this.plato);
      this.menuService.setMenu(array);
      Swal.fire(
        'Plato Agregado!',
        'El plato fue agregado al menú exitosamente',
        'success'
      );
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
    console.log(index);
    array.splice(index, 1);
    console.log(array, this.menuService.menu);
    // this.menuService.setMenu(array);
  }
}
