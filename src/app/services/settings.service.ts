import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError, TimeoutError } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private url: string = environment.API_URL;
  constructor(private http: HttpClient) { }

  getSettings(){
    return this.http.get<Settings>(`${this.url}/settings`)
    .pipe(
      timeout(3000),
      retry(3),
      catchError(this.handleError)
    );
  }

  async putSettings(data: Settings){
    let body = JSON.stringify(data);
    let headers = { 'Content-Type': 'application/json' };
    return this.http.put(`${this.url}/settings`, body, { headers, responseType: 'text' as 'text' })
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

export interface Settings {
    speed?: number;
    brightness_maximum?: number,
    contrast_adjustment?: number,
    effect_speed?: number,
    fade_frequency?: number,
    log_file?: String,
    pin_blue?: number,
    pin_green?: number,
    pin_red?: number,
    pins_enabled?: boolean,
    socket_timeout?: number,
    udp_port?: number
}
