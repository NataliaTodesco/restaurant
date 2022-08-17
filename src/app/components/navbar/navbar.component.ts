import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  acuPrecio: Number;
  promTiempoPreparacion: Number;
  promHealtScore: Number;

  constructor(
    private router: Router,
    private menuService: MenuService,
    @Inject(DOCUMENT) public document: any
  ) {
    this.acuPrecio = this.menuService.acuPrecio;
    this.promTiempoPreparacion = this.menuService.promTiempoPreparacion;
    this.promHealtScore = this.menuService.promHealtScore;
  }

  ngOnInit(): void {}

  LogOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
