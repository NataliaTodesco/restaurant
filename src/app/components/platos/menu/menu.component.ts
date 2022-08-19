import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Array<Object> = []

  constructor(private menuService: MenuService) { 
    this.menu = this.menuService.menu;
  }

  ngOnInit(): void {
  }

}
