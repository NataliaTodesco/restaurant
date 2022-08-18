import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { PlatosService } from 'src/app/services/platos.service';

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
        console.log(data);
      },
      (error) => console.log(error)
    );
    this.existe = this.menuService.menu.includes(this.plato);
  }

  AgregarPlato() {}

  EliminarPlato() {}
}
