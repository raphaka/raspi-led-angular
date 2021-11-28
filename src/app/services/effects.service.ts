import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError, TimeoutError } from 'rxjs';

import { environment } from '../../environments/environment';
import { Effect } from '../shared/effect';

@Injectable({
  providedIn: 'root'
})
export class EffectsService {

  constructor(
    @Inject('API_URL') private url: string,
    private http: HttpClient) { }

  getEffects(){
    return this.http.get<Effect[]>(`${this.url}/effects`)
    .pipe(
      timeout(3000),
      retry(3),
      catchError(this.handleError)
    );
  }

  setEffect(c: Number){
    this.http.get(`${this.url}/set/effect/${c}`,{responseType: 'text' as 'text'})
    .pipe(
      timeout(3000),
      retry(3),
      catchError(this.handleError)
    ).subscribe(data => data);
  }

  async postEffect(effect: Effect): Promise<any>{
    let body = JSON.stringify({name:effect.name, value:effect.value});
    let headers = { 'Content-Type': 'application/json' }
    return this.http.post(`${this.url}/effects`, body, { headers, responseType: 'text' as 'text' })
    .pipe(
      timeout(3000),
      retry(3),
      catchError(this.handleError)
    ).toPromise();
  }

  async deleteEffect(i: number): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: JSON.stringify({id:i}),
      responseType: 'text' as 'text'
    };
    return this.http.delete(`${this.url}/effects`, httpOptions)
      .pipe(
        timeout(3000),
        retry(3),
        catchError(this.handleError)
      ).toPromise();
  }

  private handleError(error: HttpErrorResponse) {
    if (error instanceof TimeoutError){
      return throwError('A timeout occured.');
    } else if (error instanceof ErrorEvent) {
      console.error('A client-side or network error occurred: ', error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


}
