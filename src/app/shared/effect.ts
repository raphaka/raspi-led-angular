export class Effect {
  constructor(
    public name: string,
    public value: [{color,duration,fade}],
    public id?: number
  ){}
}
