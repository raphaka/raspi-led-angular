export class Effect {
  constructor(
    public name: string,
    public value: [{color,duration,fade}],
    public edited?: boolean,
    public id?: number
  ){}

}
