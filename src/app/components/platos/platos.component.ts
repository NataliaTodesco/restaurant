import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BuscadorComponent } from './buscador/buscador.component';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css'],
})
export class PlatosComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
 
  openDialog(): void {
    this.dialog.open(BuscadorComponent);
  }
}