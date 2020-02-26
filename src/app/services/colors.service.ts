import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  getColors(){
    return [
      { red: 0, green: 0, blue: 0, name: 'black' },
      {  red : 255,  green : 255,  blue : 255,  name : 'white' },
      {  red : 255,  green : 0,  blue : 0,  name : 'red' },
      {  red : 0,  green : 255,  blue : 0,  name : 'green' },
      {  red : 0,  green : 0,  blue : 255,  name : 'blue' },
      {  red : 255,  green : 255,  blue : 0,  name : 'yellow' },
      {  red : 0,  green : 255,  blue : 255,  name : 'cyan' }
    ]
  }

}
