import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = 'http://challenge-react.alkemy.org/';

  constructor(private http: HttpClient) { }

  ObtenerToken(email: string, password: string) : Observable<any>{
    return this.http.post(this.url, {
      email,
      password
    })
  }
}
