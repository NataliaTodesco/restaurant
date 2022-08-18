import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _acuPrecio: number = 0;
  private _promTiempoPreparacion: number = 0;
  private _promHealtScore: number = 0;
  private _menu: Array<Object> = [];
  private _noVegano: number = 0;
  private _vegano: number = 0;

  public get noVegano(): number {
    return this._noVegano;
  }
  public setNoVegano(v: number) {
    this._noVegano = v;
  }

  public get vegano(): number {
    return this._vegano;
  }
  public setVegano(v: number) {
    this._vegano = v;
  }

  public get acuPrecio(): number {
    return this._acuPrecio;
  }
  public setAcuPrecio(v: number) {
    this._acuPrecio = v;
  }

  public get promTiempoPreparacion(): number {
    return this._promTiempoPreparacion;
  }
  public setPromTiempoPreparacion(v: number) {
    this._promTiempoPreparacion = v;
  }

  public get promHealtScore(): number {
    return this._promHealtScore;
  }
  public setPromHealtScore(v: number) {
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
