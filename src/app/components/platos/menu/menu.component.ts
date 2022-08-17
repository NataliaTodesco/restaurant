import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Array<Object> = []
  acuPrecio: Number;
  promTiempoPreparacion: Number;
  promHealtScore: Number;

  constructor(private menuService: MenuService) { 
    this.acuPrecio = this.menuService.acuPrecio;
    this.promTiempoPreparacion = this.menuService.promTiempoPreparacion;
    this.promHealtScore = this.menuService.promHealtScore;
    this.menu = this.menuService.menu;
  }

  ngOnInit(): void {
  }

}
