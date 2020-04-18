import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Color } from '../shared/color';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private url: string = "http://192.168.2.106:42069";
  constructor(private http: HttpClient) { }

  getColors(){
    return this.http.get<Color[]>(`${this.url}/colors`);
  }

  setColor(c: String){
    this.http.get(`${this.url}/set/colorhex/${c}`,{responseType: 'text' as 'text'}).subscribe(data => data);
  }

  async postColor(n: String, v: String): Promise<any>{
    let body = JSON.stringify({name:n, value:v.replace("#", "")});
    let headers = { 'Content-Type': 'application/json' }
    this.http.post(`${this.url}/colors`, body, { headers, responseType: 'text' as 'text' }).toPromise();
  }

  async deleteColor(i: String): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: JSON.stringify({id:i}),
      responseType: 'text' as 'text'
    };
    return this.http.delete(`${this.url}/colors`, httpOptions).toPromise();
  }

}
