import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  postColor(n: String, v: String){
    let body = JSON.stringify({name:n, value:v.replace("#", "")});
    console.log(body);
    let headers = { 'Content-Type': 'application/json' }
    this.http.post(`${this.url}/colors`, body, { headers, responseType: 'text' as 'text' }).subscribe(data => data);
  }

}
