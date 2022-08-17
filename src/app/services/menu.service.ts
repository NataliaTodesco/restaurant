import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _acuPrecio: Number = 0;
  private _promTiempoPreparacion: Number = 0;
  private _promHealtScore: Number = 0;
  private _menu: Array<Object> = [];
  private _noVegano: Number = 0;
  private _vegano: Number = 0;

  public get noVegano(): Number {
    return this._noVegano;
  }
  public set noVegano(v: Number) {
    this._noVegano = v;
  }

  public get vegano(): Number {
    return this._vegano;
  }
  public setVegano(v: Number) {
    this._vegano = v;
  }

  public get acuPrecio(): Number {
    return this._acuPrecio;
  }
  public setAcuPrecio(v: Number) {
    this._acuPrecio = v;
  }

  public get promTiempoPreparacion(): Number {
    return this._promTiempoPreparacion;
  }
  public setPromTiempoPreparacion(v: Number) {
    this._promTiempoPreparacion = v;
  }

  public get promHealtScore(): Number {
    return this._promHealtScore;
  }
  public setPromHealtScore(v: Number) {
    this._promHealtScore = v;
  }

  public get menu(): Array<Object> {
    return this._menu;
  }
  public setMenu(v: Array<Object>) {
    this._menu = v;
  }

  constructor() {}
}
