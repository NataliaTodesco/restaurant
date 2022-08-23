import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  resultados: Array<Object> = [];

  constructor(
    public dialogRef: MatDialogRef<BuscadorComponent>,
    private platosService: PlatosService
  ) {}

  ngOnInit(): void {
    const buscador = document.getElementById('buscador')!;
    const keyup = fromEvent(buscador, 'keyup');

    keyup
      .pipe(
        map((e: any) => e.currentTarget.value),
        filter((plato) => plato.length > 2),
        debounceTime(1000)
      )
      .subscribe((data) => {
        this.platosService.Buscar(data).subscribe(
          ({ results }) => {
            this.resultados = results;
          },
          (error) => console.log(error.message)
        );
      });
  }
}
