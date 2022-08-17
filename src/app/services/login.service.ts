import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = 'http://challenge-react.alkemy.org/';

  constructor(private http: HttpClient) {}

  ObtenerToken(email: string, password: string): Observable<any> {
    return this.http
      .post(this.url, {
        email,
        password,
      })
  }
}
