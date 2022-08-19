import { Component, Input, OnInit } from '@angular/core';
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
    let content =
      '<h5 class="card-text text-muted">Porciones: ' +
      '  <span class="text-dark">' +
      this.IsNull(this.plato.servings) +
      ' </span>' +
      '</h5>' +
      '<h5 class="card-text text-muted">Precio: ' +
      '   <span class="text-dark"> $' +
      this.IsNull(this.plato.pricePerServing) +
      '   </span>' +
      '</h5>' +
      '<h5 class="card-text text-muted">Tiempo de Preparación: ' +
      '    <span class="text-dark">' +
      this.IsNull(this.plato.readyInMinutes) +
      ' Min    </span>' +
      '</h5>' +
      '<h5 class="card-text text-muted mb-4">Health Score: ' +
      '    <span class="text-dark">' +
      this.IsNull(this.plato.healthScore) +
      '   </span>' +
      '</h5>';

    Swal.fire({
      title: '<strong>Detalle del Plato</strong>',
      html: content,
      showCloseButton: true,
      focusConfirm: false,
      showConfirmButton: false,
    });
  }

  AgregarPlato() {
    let array = this.menuService.menu;

    if (
      (this.menuService.menu.length < 4 &&
        this.plato.vegan === false &&
        this.menuService.noVegano < 2) ||
      (this.menuService.menu.length < 4 &&
        this.plato.vegan &&
        this.menuService.vegano < 2)
    ) {
      array.push(this.plato);
      this.menuService.setMenu(array);

      Swal.fire('Plato Agregado!', '', 'success');
      this.existe = true;
    } else {
      Swal.fire(
        'No se pudo agregar el plato',
        'Solo pueden tener 4 platos en el menú (2 veganos y 2 que no lo sean)',
        'error'
      );
    }

    this.menuService.Informacion();
  }

  EliminarPlato() {
    let array = this.menuService.menu;
    let index = array.findIndex((plato) => plato === this.plato);
        
    array.splice(index, 1);
    this.menuService.setMenu(array);
    
    Swal.fire('Plato Eliminado', '', 'success');
    this.existe = false;
    
    this.menuService.Informacion();
  }

  IsNull(element: string) {
    if (element === null) return ' - ';
    else return element;
  }

  IsTrue(v: boolean) {
    if (v === true)
      return '<i class="bi bi-check-circle-fill text-success"></i>';
    else return '<i class="bi bi-x-circle-fill text-danger"></i>';
  }
}
