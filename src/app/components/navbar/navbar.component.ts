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

  constructor(
    private router: Router,
    public menuService: MenuService,
    @Inject(DOCUMENT) public document: any
  ) {
  }

  ngOnInit(): void {
  }

  LogOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
