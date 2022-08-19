import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _acuPrecio: number = 0;
  private _promTiempoPreparacion: number = 0;
  private _promHealtScore: number = 0;
  private _menu: Array<any> = [];
  private _noVegano: number = 0;
  private _vegano: number = 0;

  public get noVegano(): number {
    return this._noVegano;
  }

  public get vegano(): number {
    return this._vegano;
  }

  public get acuPrecio(): number {
    return this._acuPrecio;
  }

  public get promTiempoPreparacion(): number {
    return this._promTiempoPreparacion;
  }

  public get promHealtScore(): number {
    return this._promHealtScore;
  }

  public get menu(): Array<any> {
    return this._menu;
  }
  public setMenu(v: Array<any>) {
    this._menu = v;
  }

  constructor() {
    this.Informacion();
  }

  Informacion() {
    this._vegano = 0;
    this._noVegano = 0;

    this._acuPrecio = 0;
    this._promTiempoPreparacion = 0;
    this._promHealtScore = 0;

    let c = 0;

    this._menu.forEach((element) => {
      c++;

      if (element.vegan) this._vegano = this._vegano + 1;
      else if (!element.vegan) this._noVegano = this._noVegano + 1;

      this._acuPrecio = this._acuPrecio + element.pricePerServing;

      this._promTiempoPreparacion =
        (this._promTiempoPreparacion + element.readyInMinutes) / c;

      this._promHealtScore = (this._promHealtScore + element.healthScore) / c;
    });
  }
}
