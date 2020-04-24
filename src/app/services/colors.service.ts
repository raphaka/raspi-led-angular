import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError, TimeoutError } from 'rxjs';

import { Color } from '../shared/color';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private url: string = "http://192.168.2.106:42069";
  constructor(private http: HttpClient) { }

  getColors(){
    return this.http.get<Color[]>(`${this.url}/colors`)
    .pipe(
      timeout(3000),
      retry(3),
      catchError(this.handleError)
    );
  }

  setColor(c: String){
    this.http.get(`${this.url}/set/colorhex/${c}`,{responseType: 'text' as 'text'})
    .pipe(
      timeout(3000),
      retry(3),
      catchError(this.handleError)
    ).subscribe(data => data);
  }

  async postColor(n: String, v: String): Promise<any>{
    let body = JSON.stringify({name:n, value:v.replace("#", "")});
    let headers = { 'Content-Type': 'application/json' }
    this.http.post(`${this.url}/colors`, body, { headers, responseType: 'text' as 'text' })
    .pipe(
      timeout(3000),
      retry(3),
      catchError(this.handleError)
    ).toPromise();
  }

  async deleteColor(i: String): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: JSON.stringify({id:i}),
      responseType: 'text' as 'text'
    };
    return this.http.delete(`${this.url}/colors`, httpOptions)
      .pipe(
        timeout(3000),
        retry(3),
        catchError(this.handleError)
      ).toPromise();
  }

  private handleError(error: HttpErrorResponse) {
    if (error instanceof TimeoutError){
      window.alert('A timeout occured.');
      return throwError('A timeout occured.');
    } else if (error instanceof ErrorEvent) {
      console.error('A client-side or network error occurred: ', error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
