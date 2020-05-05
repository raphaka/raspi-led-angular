import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public getTextColor(r,g,b): string {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    if (brightness < 123) {
      return 'rgb(255,255,255)';
    } else  {
      return 'rgb(0,0,0)';
    }
  }

  public getTextColorHex(hex){
    let rgb = this.hex2rgb(hex);
    return this.getTextColor(rgb[0],rgb[1],rgb[2]);
  }

  public hex2rgb(hex){
    var bigint = parseInt(hex, 16);
    let red: number = (bigint >> 16) & 255;
    let green: number = (bigint >> 8) & 255;
    let blue: number = bigint & 255;
    return([red,green,blue]);
  }

}
