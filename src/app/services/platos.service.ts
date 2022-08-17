import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  key: string = '815a9672d3b14724b97d967e9a3568c9';
  search_by_id_url: string = 'https://api.spoonacular.com/food/menuItems';
  search_url: string = 'https://api.spoonacular.com/food/menuItems/search?query=';

  constructor(private http: HttpClient) { }

  BuscarPlatoPorID(id:string): Observable<any> {
    return this.http.get(`${this.search_by_id_url}/${id}?apiKey=${this.key}`);
  }

  Buscar(query:string): Observable<any> {
    return this.http.get(`${this.search_url+query}&apiKey=${this.key}`)
  }
}
